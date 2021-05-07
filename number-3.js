/***
 * Algoritma
 * 1. Mulai 
 * 2. membuat fungsi yang bernama divideAndSort yang memiliki parameter angka
 * 3. deklarasi variabel pemisah dengan nilai awal 0 
 * 4. menginputkan angka pada fungsi divideAndSort
 * 5. ubah dari number ke bentuk string dengan toString()
 * 6. setiap bertemu dengan angka 0 maka pada deret angka akan dipisahkan
 * 7. setelah dipisahkan maka akan diurutkan sesuai dengan bilangan itu sendiri, dari yang terkecil 
 * hingga terbesar
 * 8. menyatukan kembali angka yang telah dipisah dan diurutkan
 * 9. kemudian mencetak hasil dari pengurutan yang telah dilakukan
 * 10. selesai
 */

const divideAndSort = (num) => {
    let div = 0
    let hasil, temp
    let hasilAkhir = ""
    if(typeof num !== 'number')
    {
        console.log("Inputan harus number")
    }
    else
    {
        hasil = num.toString().split(div)
        for(let i = 0; i < hasil.length; i++)
        {
            temp = hasil[i].split('').sort((a,b)=>a-b).join('')
            hasilAkhir = hasilAkhir + temp
        }
    }
    console.log(parseInt(hasilAkhir))
    
}
divideAndSort(5956560159466056)