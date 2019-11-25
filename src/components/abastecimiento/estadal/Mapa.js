import React,  {useState, useEffect} from 'react'
import Chart from 'react-google-charts'

const Mapa = ({guardarRutaMenu}) =>{
    const [datos, guardarDatos] = useState('');
    
    useEffect(() => {

        const obtenerdatos= async (url) =>{
    
            const datos2 = await fetch(url)
            const newdatos = await datos2.json()
            guardarDatos({
              newdatos
            })
          }

          
            guardarRutaMenu('Abastecimiento') 
            obtenerdatos('http://localhost:8080/ajax/mandar/estadisticaE.php')
          
       
    }, [guardarRutaMenu]);


    
        let Estados = []
            if (datos.newdatos) {
                datos.newdatos.map(estado =>(
                    Estados.push(estado)
                 ))
            }

        let [Amazonas, Anzoategui, Apure, Aragua, Barinas, Bolivar, Carabobo, Cojedes, DeltaAmacuro, Falcon, Guarico, Lara, Merida, Miranda, Monagas, NuevaEsparta, Portuguesa, Sucre, Tachira, Trujillo, Vargas, Yaracuy, Zulia, DistritoCapital, DependenciasFederales] =Estados

        Amazonas = Amazonas? Amazonas.pos: 0
        Anzoategui = Anzoategui? Anzoategui.pos: 0
        Apure = Apure? Apure.pos: 0
        Aragua = Aragua? Aragua.pos: 0
        Barinas = Barinas? Barinas.pos: 0
        Bolivar = Bolivar? Bolivar.pos: 0
        Carabobo = Carabobo? Carabobo.pos: 0
        Cojedes = Cojedes? Cojedes.pos: 0
        DeltaAmacuro = DeltaAmacuro? DeltaAmacuro.pos: 0
        Falcon = Falcon? Falcon.pos: 0
        Guarico = Guarico? Guarico.pos: 0
        Lara = Lara? Lara.pos: 0
        Merida = Merida? Merida.pos: 0
        Miranda = Miranda? Miranda.pos: 0
        Monagas = Monagas? Monagas.pos: 0
        NuevaEsparta = NuevaEsparta? NuevaEsparta.pos: 0
        Portuguesa = Portuguesa?Portuguesa.pos: 0
        Sucre = Sucre? Sucre.pos: 0
        Tachira = Tachira? Tachira.pos: 0
        Trujillo = Trujillo? Trujillo.pos: 0
        Vargas = Vargas? Vargas.pos: 0
        Yaracuy = Yaracuy? Yaracuy.pos: 0
        Zulia = Zulia? Zulia.pos: 0
        DistritoCapital = DistritoCapital? DistritoCapital.pos: 0
        DependenciasFederales = DependenciasFederales? DependenciasFederales.pos: 0
        
        return (
            <Chart
                width={'99%'}
                height={'97vh'}
                chartType="GeoChart"
                data={[
                    ['Country', 'Estado',  'Abastecimiento'],
                    ['VE-X', 'Vargas', Vargas], ['VE-Z', 'Amazonas', Amazonas], ['VE-F', 'Bolivar', Bolivar], ['VE-A', 'Distrito Capital', DistritoCapital],
                    ['VE-G', 'Carabobo',Carabobo], ['VE-P', 'Portuguesa', Portuguesa], ['VE-T', 'Trujillo', Trujillo],
                    ['VE-O', 'Nueva Esparta', NuevaEsparta], ['VE-K', 'Lara', Lara],
                    ['VE-B', 'Anzoategui', Anzoategui], ['VE-V', 'Zulia', Zulia], ['VE-H', 'Cojedes', Cojedes],
                    ['VE-J', 'Guarico', Guarico], ['VE-I', 'Falcon', Falcon],
                    ['VE-L', 'Merida', Merida], ['VE-Y', 'Delta Amacuro', DeltaAmacuro],
                    ['VE-S', 'Tachira', Tachira], ['VE-N', 'Monagas', Monagas], ['VE-M', 'Miranda', Miranda],
                    ['VE-C', 'Apure', Apure], ['VE-R', 'Sucre', Sucre], ['VE-U', 'Yaracuy', Yaracuy], ['VE-E', 'Barinas', Barinas],
                    ['VE-W', 'Dependencias Federales', DependenciasFederales], ['VE-D', 'Aragua', Aragua]
                ]}
                options={{
                    region: 'VE',
                    resolution:'provinces',
                    colorAxis: { colors: ['rgb(235, 235, 235)', 'rgb(15, 111, 255)'] },
                }}
                // Note: you will need to get a mapsApiKey for your project.
                // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                mapsApiKey="YOUR_KEY_HERE"
                rootProps={{ 'data-testid': '2' }}
/>
        )
}
export default Mapa
    
  
