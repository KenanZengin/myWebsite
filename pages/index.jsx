import Link from "next/link"
import Head from "next/head"
import { useState } from "react"

import {AiOutlineMail} from "react-icons/ai"
import {BsGithub} from "react-icons/bs"
import {RiLinkedinFill} from "react-icons/ri"

export default function Home() {

  const [left,setLeft]=useState(50) 
  
  const par1A = ["ABOUT","CONTACT","Time never pities the person  who does not strive to be better every  hour of the day."]
  const part1B =  ["HAKKIMDA","İLETİŞİM","Günün her saatinde daha iyi olmak için çabalamayan kişiye zaman asla acımaz."]

  const part2A =["I am serious about","improving myself in this","endless technology."]
  const part2B =["Bu ucu olmayan","sonsuz teknolojide kendimi"," geliştirmem ömür boyu devam edicek."]

  const part3A =["Thriving in fast-paced environments,","I push my creativity to it's bounds. By","championing consistency, I produce","detail oriented, pixel-perfect results."]
  const part3B =["Hızlı tempolu ortamlarda odaklanarak "," sınırlarımı sonuna kadar zorluyorum."," Tutarlılığı savunarak, ayrıntı odaklı,","mükemmel sonuçlar üretmeyi hedefliyorum."]

  const part4A = ["I constantly refresh myself"," by researching new","technologies around me and","my curiosity never ends."]
  const part4B =  ["Çevremdeki yeni","teknolojileri araştırarak kendimi ","sürekli yeniliyorum ve "," merakım hiç bitmiyor."]

  const part5A = ["SKILLS","SOCIALS","CONTACTS"]
  const part5B =  ["YETENEKLER","SOSYAL MEDYA","İLETİŞİM"]
    
    

  return (
    <div>
      <Head>
        <title>Kenan Zengin</title>
      </Head>
      <header id="top" data-aos="flip-up" data-aos-duration="1600">
        <p>Kenan Zengin </p>
        <div className="about">
          <Link href={"#about"}>
           <p>{left==50 ? par1A[0] : part1B[0]}</p>
          </Link>
          <Link href={"#contact"}>
           <p>{left==50 ? par1A[1] : part1B[1]}</p>
          </Link>
          <div className="menu-language">
              <button onClick={()=>setLeft(0)}>TR</button>
              <div className="menu-language-divider">
                <div className="menu-language-divider-back"></div>
                <div className="menu-language-divider-front" style={{left:`${left}%`}}></div>
              </div>
              <button onClick={()=>setLeft(50)}>EN</button>
          </div>
        </div>
      </header>
      <section className="sections" >
          <div className="section1" data-aos="flip-up" data-aos-duration="1600" >
              <h1>
                <span>C</span>
                <span>R</span>  
                <span>E</span>
                <span>A</span>
                <span>T</span>
                <span>I</span>
                <span>V</span>
                <span>E</span>
              </h1>
              <h1>
                <span>F</span>
                <span>R</span>
                <span>O</span>
                <span>N</span>
                <span>T</span>
                <span>-</span>
                <span>E</span>
                <span>N</span>
                <span>T</span>
              </h1>
              <h1>
                <span>D</span>
                <span>E</span>
                <span>V</span>
                <span>E</span>
                <span>L</span>
                <span>O</span>
                <span>P</span>
                <span>E</span>
                <span>R</span>
              </h1>
          </div>
          <div className="section2" id="about"  >
            <h2>{left==50 ? par1A[2] : part1B[2]}</h2>
            
            <div className="backimg" data-aos="zoom-out-up" data-aos-duration="1000" data-aos-delay="400">
            <img src="https://uploads-ssl.webflow.com/5e2de6d42ca1f7c4e812d49e/5e4079c23ddc132786dcdd27_Square_Gif_-_Hourglass.gif" alt="/" height={350} width={350}  />
            </div>


          </div>
          <div className="section3" data-aos="flip-up" data-aos-delay="100" >
            <div className="backimg">
            <img src="https://uploads-ssl.webflow.com/5e2de6d42ca1f7c4e812d49e/5e4079e4de8ab95893f36a87_Square_Gif_-_Skater%202.gif" alt="/" height={505} width={505}  />
            </div>
            <div className="info">
            <h3>{left==50 ? part2A[0] : part2B[0]} <br /> {left==50 ? part2A[1] : part2B[1]} <br />{left==50 ? part2A[2] : part2B[2]} </h3>
            <p>{left==50 ? part3A[0] : part3B[0]}<br />{left==50 ? part3A[1] : part3B[1]} <br /> {left==50 ? part3A[2] : part3B[2]}  <br />{left==50 ? part3A[3] : part3B[3]}</p>
            </div>
          </div>
          <div className="section3" data-aos="flip-up" data-aos-duration="1000" >
            
            <div className="info">
            <h3> {left==50 ? part4A[0] : part4B[0]}<br />{left==50 ? part4A[1] : part4B[1]}<br />{left==50 ? part4A[2] : part4B[2]}<br />{left==50 ? part4A[3] : part4B[3]} </h3>
            </div>
            <div className="backimg">
            <img src=" https://uploads-ssl.webflow.com/5e2de6d42ca1f7c4e812d49e/5e3bd07ff9bdda62c5b9dc39_Square_Gif_-_Girl_W_Beanie%202.png" alt="/" height={313} width={313}  />
            </div>
          </div>
          <div className="section4" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="50">
            <h3>{left==50 ? part5A[0] : part5B[0]}</h3>
            <p>
              <img  height="60" width="60" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
              <img  height="60" width="60" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
              <img  height="60" width="60" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
              <img  height="60" width="60" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" />
              <img  height="60" width="60" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/tailwind/tailwind.png" />
              <img  height="60" width="60" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png" />
              <img  height="60" width="60" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
              <img  height="60" width="60" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
              <img  height="60" width="60"  src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/nextdotjs.svg" />
              <img  height="60" width="60" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" />
            </p>
          </div>
      </section>
      <footer id="contact" >
          <div className="title">
          <h3>
          <span>L</span>
          <span>E</span>
          <span>T'</span>
          <span>S</span> 
        </h3> 
        <h3>
          <span>M</span>
          <span>A</span>
          <span>K</span>
          <span>E</span>
        </h3>
        <h3>
          <span>M</span>
          <span>A</span>
          <span>G</span>
          <span>I</span>
          <span>C</span>
          <span>!</span>
        </h3>
          </div>
          <div className="info">
            <div className="social">
              <h4>{left==50 ? part5A[1] : part5B[1]}</h4>
              <div className="links">
                <Link href={"https://github.com/KenanZengin"}>
                  <BsGithub size={35} />
                </Link>
                <Link href={"https://www.linkedin.com/in/kenan-zengin-298178202/"}>
                  <RiLinkedinFill size={35} />
                </Link>
              </div>
            </div>
            <div className="contact">
              <h4>{left==50 ? part5A[2] : part5B[2]}</h4>
              <Link  href="mailto:batuhanzengin664@hotmail.com">
                <AiOutlineMail size={35}/>
              </Link>
            </div>
          </div>
          <div className="backtop">
            <Link href="#top">
              <div className="backtopp">
                <div>BACK TO TOP &nbsp; - &nbsp;</div>
                <div>BACK TO TOP &nbsp; - &nbsp;&nbsp;</div>
                <div>BACK TO TOP &nbsp; - &nbsp;&nbsp;</div>
                <div>BACK TO TOP &nbsp; - &nbsp;&nbsp;</div>
                <div>BACK TO TOP &nbsp; - &nbsp;&nbsp;</div>
                <div>BACK TO TOP &nbsp; - &nbsp;&nbsp;</div>
                <div>BACK TO TOP &nbsp; - &nbsp;&nbsp;</div>
              </div>

            </Link>
          </div>
      </footer>
    </div>
  )
}


