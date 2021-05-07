const cekPalindrome = (str) =>{
    let status = true
    for(let i = 0; i < str.length;i++)
    {
        if(str[i] != str[str.length-i-1])
        {
            status = false
        }
    }
    if(status)
    {
        console.log("kata merupakan palindrome")
    }
    else
    {
        console.log("kata merupakan bukan palindrome")
    }
}
cekPalindrome("malam")