function luas_triangle(){
    // ngambil angka dari form
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);

    // perhitungan
    const result = 1/2 * num1  * num2;

    //tampilkan hail perhitungan ke html
    document.getElementById("result-luas").textContent = result;
    
}