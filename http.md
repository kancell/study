## http
包含请求行、请求头、请求体三个部分  
- http1.0的性能是一个比较严重的问题，每请求一个资源便会建立一个新的tcp连接，并且是串行发出的请求，因此速度相当受限  
- http1.1主要处理了1.0中性能的问题
  - 增加了keep-alive长链接来重用tcp链接，，支持pipeline网络传输（发出一个请求后不等待返回结果即发送下一个请求，不适用于非幂等的post等）
  - 支持chunked Responses（Transfer-Encoding:chunked），不发送content-length的情况下，客户端不能主动关闭连接，知道收到服务器端传来的EOF标识，这种方式叫服务器端push模型/长链接。  
  - 在http1.1，如果选用了keep-alive，则content-length和chunked必须二选一，若非长链接，则content-length可有可无
  - http1.1增加了缓存控制机制cache-control
  - 增加了host，用于被服务器端分辨访问的目标是哪个网站（多个域名可能被解析到同一个IP地址）
  - 增加了option请求，用于跨域模式下复杂请求的处理
- http1.1支持4种模型：
  - 传统tcp短链接
  - keep-alive长链接
  - 使用Transfer-Encoding的服务器端push模型
  - websocket模型
- http1.1可以重用部分TCP链接，但串行的性能问题依旧存在，必需保证其发送顺序，此外，http1.1传送数据是以文本模式传递，会借助前后端处理器对传输内容进行压缩，消耗资源依旧比较大，而http2做出的改动大量的修复了这些问题
  - 传输数据采用二进制格式
  - 移除了http1.1种串行发送请求的方式，可以通过多路复用在一个tcp链接中并行发送请求
  - 对请求头进行压缩去重以提高效率
- http2的问题，若干个请求复用一个tcp链接，tcp协议无法判断有多少http请求，一旦发生丢包，所有请求都需要等待这个包传回来，因此http3将底层协议由tcp改成了udp以避免这个问题

## https
https混合使用了非对称加密与对称加密
https请求流程如下：
- 客户端发送一个http请求，连接到服务器443端口
- 服务器端将数字证书返回至客户端，包括密钥公钥、证书颁发机构、证书到期时间、网址，公钥用于客户端加密信息，私钥由服务器端持有
- 客户端收到证书后，检查证书的合法性
- 检查通过或者用户确定信任证书后，浏览器随机生成一个session key，使用公钥对其加密，传输给服务器
- 服务器使用私钥解密并获取客户端生成的session key，这便是本次链接所使用的密钥
  
ssl数字证书不需要传输，权威机构与浏览器、操作系统等合作，将公钥信息存储在本地环境中，获取证书后，从证书中找到对应信息，并在本地环境中取得公钥




第四层（安全传输证书）这一层，我们的任务是：保证客户端收到的证书是服务器下发的证书，没有被中间人篡改过。所以，这里就有两个需求:证明证书内容没有被第三方篡改过；证明证书是服务器下发的；其实这些问题，数字证书本身已经提供方案了，数字证书中除了包含加密之后的服务器公钥，权威机构的信息之外，还包含了证书内容的签名(先通过Hash函数计算得到证书数字摘要，然后用权威机构私钥加密数字摘要得到数字签名)，签名计算方法以及证书对应的域名。这样一来，客户端收到证书之后：使用权威机构的公钥解密数字证书，得到证书内容（服务器的公钥）以及证书的数字签名，然后根据证书上描述的计算证书签名的方法计算一下当前证书的签名，与收到的签名作对比，如果一样，表示证书一定是服务器下发的，没有被中间人篡改过。因为中间人虽然有权威机构的公钥，能够解析证书内容并篡改，但是篡改完成之后中间人需要将证书重新加密，但是中间人没有权威机构的私钥，无法加密，强行加密只会导致客户端无法解密，如果中间人强行乱修改证书，就会导致证书内容和证书签名不匹配。所以证书签名就能判断证书是否被篡改再考虑证书被掉包的情况：中间人同样可以向权威机构申请一份证书，然后在服务器给客户端下发证书的时候劫持原证书，将自己的假证书下发给客户端，客户端收到之后依然能够使用权威机构的公钥解密证书，并且证书签名也没问题。但是这个时候客户端还需要检查证书中的域名和当前访问的域名是否一致。如果不一致，会发出警告！