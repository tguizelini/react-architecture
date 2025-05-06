export function ValidateEmail(email: string) {
  var emailPattern = /\S+@\S+\.\S+/;
  return emailPattern.test(email);
}

export const validateCpf = (cpfStriped: string) => {
  try {
    if (cpfStriped.length !== 11) {
      throw new Error('parsing error');
    }
    if (cpfStriped === '00000000000') {
      throw new Error('parsing error');
    }

    let Soma = 0;

    for (let i = 1; i <= 9; i += 1) {
      Soma += parseInt(cpfStriped.substring(i - 1, i), 10) * (11 - i);
    }

    let Resto = (Soma * 10) % 11;

    if (Resto === 10 || Resto === 11) Resto = 0;
    if (Resto !== parseInt(cpfStriped.substring(9, 10), 10)) {
      throw new Error('parsing error');
    }

    Soma = 0;

    for (let i = 1; i <= 10; i += 1) {
      Soma += parseInt(cpfStriped.substring(i - 1, i), 10) * (12 - i);
    }

    Resto = (Soma * 10) % 11;

    if (Resto === 10 || Resto === 11) Resto = 0;
    if (Resto !== parseInt(cpfStriped.substring(10, 11), 10)) {
      throw new Error('parsing error');
    }

    if (
      !cpfStriped ||
      cpfStriped.length !== 11 ||
      cpfStriped === '00000000000' ||
      cpfStriped === '11111111111' ||
      cpfStriped === '22222222222' ||
      cpfStriped === '33333333333' ||
      cpfStriped === '44444444444' ||
      cpfStriped === '55555555555' ||
      cpfStriped === '66666666666' ||
      cpfStriped === '77777777777' ||
      cpfStriped === '88888888888' ||
      cpfStriped === '99999999999'
    ) {
      throw new Error('parsing error');
    }

    return {
      status: true,
      msg: ''
    };
  } catch (err) {
    return {
      status: false,
      msg: 'Por favor, digite um CPF  válido'
    };
  }
};

// export function validarCNPJ(cnpj: string) {
 
//     cnpj = cnpj.replace(/[^\d]+/g,'');
 
//     if(cnpj == '') return false;
     
//     if (cnpj.length != 14)
//         return false;
 
//     if (cnpj == "00000000000000" || 
//         cnpj == "11111111111111" || 
//         cnpj == "22222222222222" || 
//         cnpj == "33333333333333" || 
//         cnpj == "44444444444444" || 
//         cnpj == "55555555555555" || 
//         cnpj == "66666666666666" || 
//         cnpj == "77777777777777" || 
//         cnpj == "88888888888888" || 
//         cnpj == "99999999999999")
//         return false;
         
//     let tamanho = cnpj.length - 2
//     let numeros = cnpj.substring(0,tamanho);
//     let digitos = cnpj.substring(tamanho);
//     let soma = 0;
//     let pos = tamanho - 7;
//     for (let i = tamanho; i >= 1; i--) {
//       soma += numeros.charAt(tamanho - i) * pos--;
//       if (pos < 2)
//             pos = 9;
//     }

//     let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
//     if (resultado != digitos.charAt(0))
//         return false;
         
//     tamanho = tamanho + 1;
//     numeros = cnpj.substring(0,tamanho);
//     soma = 0;
//     pos = tamanho - 7;
//     for (let i = tamanho; i >= 1; i--) {
//       soma += numeros.charAt(tamanho - i) * pos--;
//       if (pos < 2)
//             pos = 9;
//     }
//     resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
//     if (resultado != digitos.charAt(1))
//           return false;
           
//     return true;
    
// }
