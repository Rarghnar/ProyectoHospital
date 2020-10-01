import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../component/models/paciente.model';

@Component({
  selector: 'app-screen-lista-pacientes-admin',
  templateUrl: './screen-lista-pacientes-admin.component.html',
  styleUrls: ['./screen-lista-pacientes-admin.component.less']
})
export class ScreenListaPacientesAdminComponent implements OnInit {
  public pacientes: Paciente[];

  constructor() { 
 /*    this.checkoutForm = this.createFormGroup(); */
    this.pacientes = [
      {
       // imgURL: 'https://i.blogs.es/68e984/jinx_article_banner/450_1000.jpg',
        nombre: 'Exequiel Rodrigo Andrade Rojas ',
        edad: '20',
        sintoma: 'Dolor de cuello y constantes dolores de cabeza',
        color: 'red',
        sexo: 'Masculino',
        rut: '20271557-5',
        habitacion: '1-1',
        medicoEncargado: 'Doctora Patricia Alvarez',
        ultimoChequeo:'29 de septiembre, 12:20hrs',
        chequeadoPor:'Enferma Catalina Riquelme'

      },

      {
       // imgURL: 'https://www.esportmaniacos.com/wp-content/uploads/2020/09/samira.jpg',
        nombre: 'Sebastian Antonio marti Cabrera ',
        edad: '22',
        sintoma: 'Fractura de pierna grave',
        color: 'red',
        sexo: 'Femenino',
        rut: '19823772.1',
        habitacion: '1-2',
        medicoEncargado: 'Doctora Patricia Alvarez',

        ultimoChequeo:'28 de septiembre, 17:15hrs',
        chequeadoPor:'Enferma Catalina Riquelme'

      },
      {
        // imgURL: 'https://www.esportmaniacos.com/wp-content/uploads/2020/09/samira.jpg',
         nombre: 'Sebastian Antonio marti Cabrera ',
         edad: '22',
         sintoma: 'ajsdjsjdajsdjasjdjasdjasjd',
         color: 'red',
         sexo: 'Femenino',
         rut: '19823772.1',
         habitacion: '1-3',
         medicoEncargado: 'Doctora Patricia Alvarez',

         ultimoChequeo:'28 de septiembre, 17:15hrs',
         chequeadoPor:'Enferma Catalina Riquelme'

       },
       {
        // imgURL: 'https://www.esportmaniacos.com/wp-content/uploads/2020/09/samira.jpg',
         nombre: 'Sebastian Antonio marti Cabrera ',
         edad: '22',
         sintoma: 'malardo maximodsdasdasdads ',
         color: 'red',
         sexo: 'Femenino',
         rut: '19823772.1',
         habitacion: '1-4',
         medicoEncargado: 'Doctora Patricia Alvarez',

         ultimoChequeo:'28 de septiembre, 17:15hrs',
         chequeadoPor:'Enferma Catalina Riquelme'

       },
       {
        // imgURL: 'https://www.esportmaniacos.com/wp-content/uploads/2020/09/samira.jpg',
         nombre: 'Sebastian Antonio marti Cabrera ',
         edad: '22',
         sintoma: 'malardo maximodsadsdasdasdas ',
         color: 'red',
         sexo: 'Femenino',
         rut: '19823772.1',
         habitacion: '1-5',
         medicoEncargado: 'Doctora Patricia Alvarez',

         ultimoChequeo:'28 de septiembre, 17:15hrs',
         chequeadoPor:'Enferma Catalina Riquelme'

       },

      {
        //  imgURL: 'https://i.blogs.es/68e984/jinx_article_banner/450_1000.jpg',
          nombre: 'Anibal Escalante Verdura Antonia',
          edad: '22',
          sintoma: 'Muy Nashe, otro nashe nashe jajaj',
          color: 'red',
          sexo: 'Femenino',
          rut: '87.212.212.7',
          habitacion: '1-6',
          medicoEncargado: 'Doctora Patricia Alvarez',

          ultimoChequeo:'23 de septiembre, 17:15hrs',
          chequeadoPor:'Enferma Catalina Riquelme'

        },
        {
          // imgURL: 'https://i.blogs.es/68e984/jinx_article_banner/450_1000.jpg',
           nombre: 'Exequiel Rodrigo Andrade Rojas ',
           edad: '20',
           sintoma: 'Dolor de cuello y constantes dolores de cabeza',
           color: 'red',
           sexo: 'Masculino',
           rut: '20271557-5',
           habitacion: '1-7',
           medicoEncargado: 'Doctora Patricia Alvarez',
           ultimoChequeo:'29 de septiembre, 12:20hrs',
           chequeadoPor:'Enferma Catalina Riquelme'

         },
         {
          // imgURL: 'https://i.blogs.es/68e984/jinx_article_banner/450_1000.jpg',
           nombre: 'Exequiel Rodrigo Andrade Rojas ',
           edad: '20',
           sintoma: 'Dolor de cuello y constantes dolores de cabeza',
           color: 'red',
           sexo: 'Masculino',
           rut: '20271557-5',
           habitacion: '1-8',
           medicoEncargado: 'Doctora Patricia Alvarez',
           ultimoChequeo:'29 de septiembre, 12:20hrs',
           chequeadoPor:'Enferma Catalina Riquelme'

         },
         {
          // imgURL: 'https://i.blogs.es/68e984/jinx_article_banner/450_1000.jpg',
           nombre: 'Exequiel Rodrigo Andrade Rojas ',
           edad: '20',
           sintoma: 'Dolor de cuello y constantes dolores de cabeza',
           color: 'red',
           sexo: 'Masculino',
           rut: '20271557-5',
           habitacion: '2-1',
           medicoEncargado: 'Doctora Patricia Alvarez',
           ultimoChequeo:'29 de septiembre, 12:20hrs',
           chequeadoPor:'Enferma Catalina Riquelme'

         },
         {
          // imgURL: 'https://i.blogs.es/68e984/jinx_article_banner/450_1000.jpg',
           nombre: 'Exequiel Rodrigo Andrade Rojas ',
           edad: '20',
           sintoma: 'Dolor de cuello y constantes dolores de cabeza',
           color: 'red',
           sexo: 'Masculino',
           rut: '20271557-5',
           habitacion: '2-2',
           medicoEncargado: 'Doctora Patricia Alvarez',
           ultimoChequeo:'29 de septiembre, 12:20hrs',
           chequeadoPor:'Enferma Catalina Riquelme'

         },
         {
          // imgURL: 'https://i.blogs.es/68e984/jinx_article_banner/450_1000.jpg',
           nombre: 'Exequiel Rodrigo Andrade Rojas ',
           edad: '20',
           sintoma: 'Dolor de cuello y constantes dolores de cabeza',
           color: 'red',
           sexo: 'Masculino',
           rut: '20271557-5',
           habitacion: '2-3',
           medicoEncargado: 'Doctora Patricia Alvarez',
           ultimoChequeo:'29 de septiembre, 12:20hrs',
           chequeadoPor:'Enferma Catalina Riquelme'

         },
         {
          // imgURL: 'https://i.blogs.es/68e984/jinx_article_banner/450_1000.jpg',
           nombre: 'Exequiel Rodrigo Andrade Rojas ',
           edad: '20',
           sintoma: 'Dolor de cuello y constantes dolores de cabeza',
           color: 'red',
           sexo: 'Masculino',
           rut: '20271557-5',
           habitacion: '2-4',
           medicoEncargado: 'Doctora Patricia Alvarez',
           ultimoChequeo:'29 de septiembre, 12:20hrs',
           chequeadoPor:'Enferma Catalina Riquelme'

         },
         {
          // imgURL: 'https://www.esportmaniacos.com/wp-content/uploads/2020/09/samira.jpg',
           nombre: 'Sebastian Antonio marti Cabrera ',
           edad: '22',
           sintoma: 'Fractura de pierna grave',
           color: 'red',
           sexo: 'Femenino',
           rut: '19823772.1',
           habitacion: '2-5',
           medicoEncargado: 'Doctora Patricia Alvarez',

           ultimoChequeo:'28 de septiembre, 17:15hrs',
           chequeadoPor:'Enferma Catalina Riquelme'

         }, 
         {
          // imgURL: 'https://www.esportmaniacos.com/wp-content/uploads/2020/09/samira.jpg',
           nombre: 'Sebastian Antonio marti Cabrera ',
           edad: '22',
           sintoma: 'Fractura de pierna grave',
           color: 'red',
           sexo: 'Femenino',
           rut: '19823772.1',
           habitacion: '3-1',
           medicoEncargado: 'Doctora Patricia Alvarez',

           ultimoChequeo:'28 de septiembre, 17:15hrs',
           chequeadoPor:'Enferma Catalina Riquelme'

         },
         {
          // imgURL: 'https://www.esportmaniacos.com/wp-content/uploads/2020/09/samira.jpg',
           nombre: 'Sebastian Antonio marti Cabrera ',
           edad: '22',
           sintoma: 'Fractura de pierna grave',
           color: 'red',
           sexo: 'Femenino',
           rut: '19823772.1',
           habitacion: '3-2',
           medicoEncargado: 'Doctora Patricia Alvarez',

           ultimoChequeo:'28 de septiembre, 17:15hrs',
           chequeadoPor:'Enferma Catalina Riquelme'

         },

      ]
  }

  ngOnInit(): void {
  }
}