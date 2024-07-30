import './index.css';
import ButtonHome from '../../components/buttonHome';
import linkedin from '../../images/linkedin.jpeg'
import BoxProjeto from '../../components/boxProjeto';
import hcloud from '../../images/hcloud.png'

export default function App() {
  return (
    <div className="bg-fundo flex flex-col justify-center">
       <section className='w-screen h-screen flex flex-col md:gap-4 justify-evenly items-center lg:flex-row lg:justify-evenly  md:text-4xl'>
          <div className=' flex flex-col justify-center items-center gap-0 lg:gap-5 lg:items-left'>
              <h1 className='text-4xl mb-1 lg:text-8xl md:text-4xl'>Davi Souza Santos</h1>
              <h2 className='text-2xl mb-8 lg:text-5xl'>Developer WEB FullStack</h2>

            <ButtonHome 
                desc="Saiba Mais"
                linkBt="#projetos"
            />
          </div>

          <div className=''> 
            <img className='w-48 rounded-full border lg:w-96' src={linkedin} alt="img-capa" />
          </div>
       </section>

       <section className='bg-fundoProjetos flex flex-col items-center justify-center gap-8 py-20'>
            <h1 className='text-6xl mb-10'>Quem sou eu</h1>
            <p className='flex flex-col justify-center items-center text-center text-2xl w-9/12 gap-5'> 
                <p>Atualmente, estou cursando o Tecnólogo em Análise e Desenvolvimento de Sistemas pelo SENAC. </p>
                
                <p>Minha formação anterior como Técnico em Informática pelo Instituto Social Nossa Senhora de Fátima - FREI consolidou habilidades fundamentais em programação e atendimento ao cliente. Adicionalmente, completei um curso de Desenvolvimento Full Stack, ampliando meu conhecimento em tecnologias modernas como React.js, Node.js e Java para o desenvolvimento de sistemas.</p>
                <p>Como Desenvolvedor Web no projeto Horizon Cloud, participei da implementação do front-end da aplicação conforme o design elaborado no Figma, utilizando HTML, CSS e NextJS para construir interfaces de usuário intuitivas e funcionais.</p>
                <p>Meu compromisso com a excelência técnica e a satisfação do cliente é evidenciado pela minha capacidade de resolver problemas complexos e implementar soluções eficazes. Continuo aprimorando minhas habilidades e expandindo meu conhecimento em novas tecnologias e metodologias de desenvolvimento, sempre buscando maneiras de agregar valor e alcançar novos patamares profissionais.</p>
                <p>Ocupei o cargo de Analista de Suporte N2 onde prestava suporte técnico a usuários externos, solucionando questões complexas relacionadas software e rede, além de oferecer suporte a aplicações corporativas e comerciais como PDV e ERP voltados para o segmento de ótica, parques de diversão e automação comercial, incluindo a análise e elaboração de projetos e melhorias de sistema, elaboração de documentação técnica detalhada e o registro de incidentes e mudanças.</p>
                <p>Participei de grandes projetos de implementações de melhorias e customizações em grandes players do mercado óptico, tais como:</p>

                <ul className='list-disc py-9'>
                  <li>Golden Mix</li>
                  <li>Óticas Indaiá</li>
                  <li>Zeiss Vision Center</li>
                  <li>Flulook</li>
                </ul>

                <p className='mb-16'>Atualmente busco uma oportunidade como Júnior/Estagiário para aprimorar meu conhecimento na área da programação.</p>
            </p>
            <ButtonHome 
              desc="Projetos"
              linkBt="#projetos"
            />
       </section>

       <section id='projetos' className='flex flex-wrap justify-center items-center w-screen py-36 bg-fundoBox gap-72 md:px-9'>

            <BoxProjeto 
                Titulo="Horizon Cloud"
                Desc="Sistema criado para aluguel de computadores na nuvem onde os usuários poderão se conectar e jogar remotamente sem precisar comprar um pc gamer."
                DescButton="Saiba mais"
                LinkButton= "https://horizon-cloud.vercel.app/"
                imgBox={hcloud}
            />

            <BoxProjeto 
                Titulo="Planner"
                Desc="Uma API em Java para backend de uma aplicação de planner(gerenciamento de viagens) onde foi utilizado as seguintes tecnologias: JPA, Lombok, Hibernate, MySQL e Flyway "
                DescButton="Saiba mais"
                LinkButton= "https://github.com/DevDaviSouza/planner"
                imgBox={hcloud}
            />

 
       </section>
    </div>
  );
}