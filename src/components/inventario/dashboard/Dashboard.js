import React, {useEffect} from 'react';



const Dashboard = ({guardarRutaMenu}) => {

  useEffect(() => {
    
    const enviarRuta = () => {
      guardarRutaMenu('Inventario')
    }

    enviarRuta()
  }, [guardarRutaMenu])

    return (
        

        <div className="o-layout-container  colorTwo">
            
            
          </div>
        
      
    );
}

export default Dashboard;
