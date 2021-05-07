const reverseWords = (str) => {
    let len = str.length
    let newString = ""
    //console.log(len)
    for(let i = len; i >= -1; i--)
    {
        if(str[i] == " " || i < 0)
        {
            let j = i 
            for(j += 1; j < len; j++)
            {
              newString +=  str[j] 
            }
            newString += ' '
            len = len-(len-i)
            //console.log(len)
        } 
    }
    return newString
}
reverseWords("Javascript Belajar Saya")