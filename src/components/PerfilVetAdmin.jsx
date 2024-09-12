import React from 'react'
import { PiChatsLight } from "react-icons/pi";
import { LuHotel, LuFacebook, LuInstagram, LuLinkedin, LuLayoutDashboard } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { TbPencilMinus, TbPhotoEdit } from "react-icons/tb";
import logo from '../assets/images/logo.svg'
import Rating from './Rating';


function PerfilVetAdmin() {
  return (
    <div className="bg-white">
      <div className='flex justify-between items-center w-full h-[70] bg-[#F5F5F5]'>
          <a href="" className='mx-auto'><img src={logo} alt=""  className='w-48 h-16'/></a>
          <LuLayoutDashboard size={40} className='mr-5'/>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="relative w-[1204px] h-[544px] shadow-md rounded-xl overflow-hidden">
          <div className="absolute top-32 left-3 rounded-full z-10">
            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className=" rounded-full object-cover w-[250px] h-[250px]"/>
          </div>
          <div className="flex justify-end w-full h-1/2 bg-gray-400 p-2">
            <a href=""><TbPhotoEdit size={40} color='black'/></a>
          </div>
          <div className="bg-white h-full p-4">
            <div className="ml-72">
              <h2 className="text-3xl font-bold m-0 font-fraunces no-underline">Matheus Santos de Oliveira</h2>
              <p className="mt-1.5 text-slate-300">
                <div className="flex justify-between items-center w-full">
                  <div className="flex gap-2">
                    <span className="inline-block p-1 rounded-[100px] text-sm font-semibold bg-slate-200 text-slate-600">Clinica</span>
                    <span className="inline-block p-1 rounded-[100px] text-sm font-semibold bg-slate-200 text-slate-600">Clinica</span>
                    <span className="inline-block p-1 rounded-[100px] text-sm font-semibold bg-slate-200 text-slate-600">Clinica</span>
                  </div>
                  <div className="mr-3">
                    <a href='./Chat' className='no-underline'><button className="bg-[#5C2574] font-medium shadow-lg text-white text-base p-1 rounded-lg cursor-pointer flex items-center gap-1 font-roboto hover:transition-transform hover:duration-300 hover:ease-in-out"><PiChatsLight size={30}/>Fale com este profissional</button></a>
                  </div>
                </div>
              </p>
              <div className="flex items-center justify-between gap-2 mt-2">
                <div className="flex flex-col text-xs font-sans">
                  <p className='flex gap-1'><LuHotel/>Domicílio</p>
                  <p className='flex gap-1'><IoLocationOutline/>Belo Horizonte, MG</p>
                </div>
                <div className="flex items-center">
                  <Rating/>
                </div>
                <div className="flex items-center font-bold text-base">Valor da consulta</div>
                <div className="flex items-center"><a href="" className="no-underline decoration-inherit mr-4 "><TbPencilMinus size={25} color='black'/></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className='relative w-[1204px] h-96 shadow-md rounded-xl overflow-auto bg-white p-4 m-0'>
          <div className='flex justify-between items-center'>
            <h1 className='text-3xl font-sans font-bold text-black ml-3'>Informações do Profissional</h1>
            <a href="" className='no-underline'><TbPencilMinus size={30} color='black'/></a>
          </div>
          <div>
            <h2 className='no-underline text-black text-3xl font-medium font-sans'>
              Formas de Atendimento:
              <p>aqui ficara o texto</p>
            </h2>
          </div>
          <div>
            <h2 className='no-underline text-black text-3xl font-medium font-sans'>
              Sobre:
              <p>aqui ficara o texto</p>
            </h2>
          </div>
          <div>
            <h2 className='no-underline text-black text-3xl font-medium font-sans'>
              Serviços Prestados
              <p>aqui ficara o texto</p>
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className='relative w-[1204px] h-96 shadow-md rounded-xl overflow-auto bg-white p-4'>
          <div className='flex justify-between items-center'>
            <h1 className='text-3xl font-sans font-bold text-black ml-3'>Formação Acadêmica</h1>
            <a href="" className='no-underline'><TbPencilMinus size={30} color='black'/></a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className='relative w-[1204px] h-96 shadow-md rounded-xl overflow-auto bg-white p-4'>
          <div className='flex justify-between items-center'>
            <h1 className='text-3xl font-sans font-bold text-black ml-3'>Experiência Profissional</h1>
            <a href="" className='no-underline'><TbPencilMinus size={30} color='black'/></a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className='relative w-[1204px] h-96 shadow-md rounded-xl overflow-auto bg-white p-4'>
          <div className='flex justify-between items-center'>
            <h1 className='text-3xl font-sans font-bold text-black ml-3'>Certificados</h1>
            <a href="" className='no-underline'><TbPencilMinus size={30} color='black'/></a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className='relative w-[1204px] h-96 shadow-md rounded-xl overflow-auto bg-white p-4'>
          <div className='flex justify-between items-center'>
            <h1 className='text-3xl font-sans font-bold text-black ml-3'>Atendimento</h1>
            <a href="" className='no-underline'><TbPencilMinus size={30} color='black'/></a>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <a href='./Chat' className='no-underline'><button className=" flex justify-center items-center gap-1 w-[408.5px] h-[59px] bg-[#5C2574] font-medium shadow-lg text-white text-xl rounded-lg cursor-pointer font-roboto hover:transition-transform hover:duration-300 hover:ease-in-out"><PiChatsLight size={30}/>Fale com este profissional</button></a>
      </div>
      <div className='flex justify-center items-center mt-20'>
        <div className='flex flex-row relative w-full h-[299px] shadow-md overflow-auto bg-[#E2FBF9] p-4'>
          <div className='flex flex-col ml-28 mr-20'>
            <img src={logo} alt="" className='w-[262px] h-[100px]'/>
            <p className='text-xl font-sans text-[#333333] font-light mt-7'>Rua Baker 221B, sala 304 - Centro, Londres - UK,  NW1 6XE<br/>
              CNPJ: 12345678000199<br/>
              CRMV: 98765
            </p>
          </div>
          <div className='flex flex-col gap-1 text-base font-medium text-[#333333] mt-16'>
            <p>Guia de Uso da Plataforma</p>
            <p>Sou Veterinário</p>
            <p>Política de Privacidade</p>
            <p>Central de Ajuda</p>
          </div>
          <div className='flex flex-row ml-20 mt-24 gap-4'>
            <LuInstagram size={40}/>
            <LuFacebook size={40}/>
            <LuLinkedin size={40}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilVetAdmin