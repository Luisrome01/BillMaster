import React, { useState } from 'react';
import "./css/InputDinamico.css";


function InputDinamico({width, height, color,}) {
  // Estado para almacenar el tipo de documento seleccionado y el valor ingresado
  const [tipoDocumento, setTipoDocumento] = useState('');
  const [valorDocumento, setValorDocumento] = useState('');

  // Función para manejar cambios en la selección del tipo de documento
  const handleTipoDocumentoChange = (event) => {
    setTipoDocumento(event.target.value);
    setValorDocumento('');
  };

  // Función para manejar cambios en el valor del documento ingresado
  const handleValorDocumentoChange = (event) => {
    setValorDocumento(event.target.value);
  };
  
  const style = {
    width: width,
    height: height,
    backgroundColor: color,
    
}
  return (
    <div>
     
      <select value={tipoDocumento} onChange={handleTipoDocumentoChange} style = {style}>
        <option value="">Cedula o Pasaporte</option>
        <option value="cedula">Cédula de Identidad</option>
        <option value="pasaporte">Pasaporte</option>
    
      </select>
      {tipoDocumento && (
        <div>
          <input  
          style = {style}
            type="text" 
            id="valorDocumento" 
            value={valorDocumento} 
            onChange={handleValorDocumentoChange} 
            placeholder={`Ingrese el ${tipoDocumento === 'cedula' ? 'Cédula' : 'Pasaporte'}`}
          />
        </div>
      )}
    </div>
  );
}

export default InputDinamico;
