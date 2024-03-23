import "./css/Facturacion.css";
import React from "react";
import BtnGeneral from "../../../components/buttons/BtnGeneral";
import InputDinamico from "../../../components/inputs/InputDinamico";
import InputDiferente from "../../../components/inputs/InputDiferente";
import svgAdd from "../../../assets/svg_add.svg";

const Facturacion = () => {
  return (
    <>
      <div className="FacturaContainer">
        <h1 className="FacturaHeaderContainer">Nueva Factura</h1>

        <div className="FacturaInputsContainer">
          <div className="FacturaInputsEntre2">
            <div className="FacturaInput1">
              <div className="FacturaCedula-nombre">
                <div className="FacturaCedula">
				<InputDinamico name="Cedula o Pasaporte:" color="#D9D9D9" />
				
                </div>
				
                <div className="FacturaNombre">
                  <InputDiferente name="Nombre:" color="#D9D9D9" />
                </div>
              </div>
              <div className="FacturaDireccion">
                <InputDiferente name="Direccion:" color="#D9D9D9" width="700px"/>
              </div>
              <div className="FacturaRif-BotonCrear">
                <div className="FacturaRif">
                  <InputDiferente name="Rif:" color="#D9D9D9" />
                </div>
                <div className="FacturaBotonCrear">
                  <BtnGeneral img={svgAdd} text="Crear Cliente" width="165px" />
                </div>
              </div>
            </div>

            <div className="FacturaInput2">
              <div className="FacturaoCodigo-buscar">
                <div className="FacturaCodigo">
                  <InputDiferente name="Codigo:" color="#D9D9D9" />
                </div>
                <div className="FacturaBuscar">
                  {/* crear boton de la lupa de busqueda */}
				  <button className = "FacturaSearch" > name</button>
                </div>
              </div>
              <div className="FacturaCantidad">
			  <InputDiferente
                    type="number"
                    name="Cantidad:"
                    color="#D9D9D9"
                  />
              </div>
              <div className="FacturaBotonAgregar">
                <BtnGeneral
                  img={svgAdd}
                  text="Agregar Producto"
                  width="165px"
                />
              </div>
            </div>
          </div>

          <div></div>
        </div>

        <div className="FacturaTableContainer"></div>
        <div className="FacturaCheckoutContainer"></div>
      </div>
    </>
  );
};

export default Facturacion;
