s = 'abc'
for (let i = 0; i < s.length; i++) {
    for (let j = s.length; j > i; j--) {
        console.log(s[i],s[j])
    }
}