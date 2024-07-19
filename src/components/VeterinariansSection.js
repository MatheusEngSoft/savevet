import React from 'react'
import '../assets/style/VeterinariansSection.css'
import cirurgia from '../assets/images/cirurgia.svg'
import cuidados from '../assets/images/cuidados.svg'
import Button from './Button'


export default function VeterinariansSection(){
  return(
    <main className='principal'>
      <header className='header'>
         <h1>Para Veterinários</h1>
      </header>      
      <section>
        <div>
          <div>
            <img src={cirurgia} alt="Cirurgia" />
          </div>
          <div>
            <h2>Expanda Sua Base de Clientes com Facilidade:</h2>
            <p>A SalveVet é a plataforma ideal para você, veterinário, que<br/>
            deseja se conectar com novos clientes e expandir sua base<br/> 
            de atendimento.<br/><br/>
            Através de nossa plataforma, você pode oferecer consultas<br/>
            domiciliares e teleconsultas, alcançando tutores de pets<br/>
            que precisam dos seus serviços de maneira rápida e<br/>
            prática.</p>
          </div>
        </div>
        <div>
          <div>
            <img src={cuidados} alt="Cuidados" />
          </div>
          <div>
            <h2>Perfil Profissional e Gestão Centralizada:</h2>
            <p>Apresente-se de forma profissional com um perfil<br/>
            completo na SalveVet e destaque suas qualificações e<br/>
            especializações.<br/><br/>
            Além disso, nossa plataforma permite que você<br/>
            gerencie suas consultas e documentações de forma<br/>
            centralizada, facilitando o acompanhamento de<br/>
            tratamentos e a comunicação com os clientes.<br/>
            Simplifique a gestão de sua carreira e foque no que<br/>
            você faz de melhor: cuidar dos animais.</p>
          </div>
        </div>
      </section>
      <footer>
          <Button text="Sou Veterinário SalveVet"/>
      </footer>
    </main>
  )
}