import React from 'react';
import './style.scss';
import FirstLegend from '../../assets/img/legend-1.jpg';
import ElectroService from '../../assets/img/electroservice.jpg';
import Vodopost from '../../assets/img/vodopost.jpg'
import Kuhna from '../../assets/img/kuhna.jpg'
import Santina from '../../assets/img/santina.jpg'
import Basein from '../../assets/img/baseyn.jpg'

const Dashbord = (props) => {
  const height = window.innerHeight * 0.8;
  return (
  <div >
    <div className='legend1' style={{ 
        backgroundImage: `url(${FirstLegend})`,
        height: height
      }}>
        <div className='circle-wrapper'>
         <div className='circle-content'>  
          <div className='cirle-title'>
            <h1>Kúpeľňa <br /> a sanita</h1>
          </div >
          <div className="last-text">
            <div>
	            inštalatérske práce, montáž kúpeľňových doplnkov, vodoinštalatér, ...
            </div>
            <div className='contact'>
              Kontaktujte nás
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='list-services row'>
      <div className="col">
          <div className='service-img' style={{ 
            backgroundImage: `url(${ElectroService})`,
          }} />
        </div>
      <div className="col">
        <div className="description">
          <h2>ELEKTROSERVIS</h2>
          <p>
            Zväčša staršie stavby majú inštalovanú zastaralú technológiu vodičov, 
            čoho dôsledkom zvyknú byť problémy s elektrinou v domácnosti. Časté 
            vyhadzovanie ističov poistiek, prehrievanie alebo spaľovanie vodičov, 
            skratovanie spotrebičov ohrozuje vaše zdravie a bezpečnosť majetku.
          </p>
          <p>Ponúkame elektroservis, opravu elektroinštalácií, montáž svietidiel, 
            vypínačov, zásuviek, zapájanie spotrebičov…</p>
            <div className="contact-us-btn">Zobraziť viac</div>
        </div>
      </div>
   </div >
   <div className='list-services row'>
      <div className="col">
        <div className="description yel">
          <h2>VODOINŠTALÁCIE</h2>
          <p>
          	Veľmi praktickým spôsobom prepojenia vody v domácnostiach na miestach 
            so sťaženým prístupom, sa stali flexibilné hadice. Využívajú sa na 
            pripojenie vody k vodovodným batériám v kuchyni alebo kúpeľni, 
            pripojenie automatickej práčky k vode, pripojenie nádržky WC.          
          </p>
          <p>
          	Ponúkame inštalatérske práce, montáž kúpeľňových doplnkov, 
            pripojenie vody a odpadu k linke, výmenu a montáž umývadiel, 
            opravu WC, opravu sifónov…</p>
          <div className="contact-us-btn">Zobraziť viac</div>
        </div>
        </div>
        <div className="col">
        <div className='service-img' style={{ 
          backgroundImage: `url(${Vodopost})`,
        }}/>
      </div>
   </div >
   <div className='list-services row'>
      <div className="col">
        <div className='service-img' style={{ 
          backgroundImage: `url(${Santina})`,
        }}/>
      </div>
      <div className="col">
        <div className="description">
          <h2>KÚPEĽNE A SANITA</h2>
          <p>
          Pekné a moderné kúpeľne dnes ponúkajú široký priestor pre doplnky, 
          ktoré sú z praktického, estetického a v neposlednom rade často 
          zdravotného hľadiska vhodné pre pohodlnejší a kvalitnejší spôsob 
          života. Pomôžeme riešiť montáže špeciálnych alebo bežných doplnkov 
          vo vašej kúpeľni.
          </p>
          <p>
	        Ponúkame montáž kúpeľňových doplnkov, inštalatérske práce, výmenu 
          a montáž umývadiel, opravu WC, opravu sifónov…
          </p>
            <div className="contact-us-btn">Zobraziť viac</div>
        </div>
        </div>
   </div >
   <div className='list-services row'>
      <div className="col">
        <div className="description yel">
          <h2>KUCHYŇA</h2>
          <p>
            Klasické pripojenie vody k batériam kuchynskej linky, osadenie 
            novej, alebo výmena starej vodovodnej batérie, pripojenie 
            odpadového odtoku, alebo zavedenie dvojitého odtoku z drezu 
            kuchynskej linky sú služby, ktoré poskytujeme. Ponúkame služby 
            spojené s modernými zariadeniami a ich pripojeniu na požadované 
            zdroje.
          </p>
          <p>
            Ponúkame pripojenie vody a odpadu k linke, inštalatérske práce, 
            výmenu a montáž umývadiel, opravu sifónov…
          </p>
          <div className="contact-us-btn">Zobraziť viac</div>
        </div>
        </div>
        <div className="col">
        <div className='service-img' style={{ 
          backgroundImage: `url(${Kuhna})`,
        }}>
        </div>
      </div>
   </div >
   <div className='list-services row'>
      <div className="col">
        <div className='service-img' style={{ 
          backgroundImage: `url(${Basein})`,
        }}>
        </div>
      </div>
      <div className="col">
        <div className="description">
          <h2>BAZÉN</h2>
          <p>
            Odborná komplexná starostlivosť o bazény so všetkými potrebnými 
            náležitosťami pre profesionálnu údržbu. Pravidelný dohľad a
            čistenie bazénu, jeho okolia, kontrola kvality vody a udržiavanie 
            ph nutného pre bazénovú vodu. Mechanické čistenie vody od usadenín, 
            lístia, hmyzu, údržba a čistenie filtračného systému.
          </p>
          <p>
            Ponúkame údržbu a opravu bazénov, montáž filtrácií a inej 
            technológie, predaj bazénovej techniky..
          </p>
            <div className="contact-us-btn">Zobraziť viac</div>
        </div>
        </div>
   </div >
  </div>
)
}

export default  Dashbord;