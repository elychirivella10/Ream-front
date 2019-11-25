import React, {useEffect} from 'react';

const Home = ({guardarRutaMenu}) => {

    useEffect(() => {

        const enviarRuta = () => {
            guardarRutaMenu ('Home')
          }
      
          enviarRuta()

    }, [guardarRutaMenu])


    return (
        <div className="l-container">hola</div>
    );
}

export default Home;
