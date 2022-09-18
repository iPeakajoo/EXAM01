function calPig(base,height){
    const cal= (1/2)*base*height
    return cal
  }
  let obj_btncal = document.getElementById("btnCal");
    obj_btncal.addEventListener('click', () => {

      const int_base = Number(document.getElementById("base").value);
      const int_height = Number(document.getElementById("height").value);
      console.log(int_base)
      console.log(int_height)

      const obj_result = document.getElementById("result")
      obj_result.innerHTML= `${calPig(int_base,int_height)} หน่วย`

      document.getElementById("base").value=""
      document.getElementById("height").value=""

    });