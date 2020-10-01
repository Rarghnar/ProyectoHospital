import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../component/models/paciente.model';

@Component({
  selector: 'app-screen-habitaciones-libres',
  templateUrl: './screen-habitaciones-libres.component.html',
  styleUrls: ['./screen-habitaciones-libres.component.less']
})
export class ScreenHabitacionesLibresComponent implements OnInit {

  public pacientes: Paciente[];

  constructor() { 

    this.pacientes = [
      {
       // imgURL: 'https://i.blogs.es/68e984/jinx_article_banner/450_1000.jpg',
        nombre: 'Exequiel Rodrigo Andrade Rojas ',
        edad: '20',
        sintoma: 'Dolor de cuello y constantes dolores de cabeza',
        color: 'green',
        sexo: 'Masculino',
        rut: '20271557-5',
        habitacion: '3-3',
        medicoEncargado: 'Doctora Patricia Alvarez',
        ultimoChequeo:'29 de septiembre, 12:20hrs',
        chequeadoPor:'Enferma Catalina Riquelme'

      },

      {
       // imgURL: 'https://www.esportmaniacos.com/wp-content/uploads/2020/09/samira.jpg',
        nombre: 'Sebastian Antonio marti Cabrera ',
        edad: '22',
        sintoma: 'Fractura de pierna grave',
        color: 'green',
        sexo: 'Femenino',
        rut: '19823772.1',
        habitacion: '3-4',
        medicoEncargado: 'Doctora Patricia Alvarez',

        ultimoChequeo:'28 de septiembre, 17:15hrs',
        chequeadoPor:'Enferma Catalina Riquelme'

      },
      {
        // imgURL: 'https://www.esportmaniacos.com/wp-content/uploads/2020/09/samira.jpg',
         nombre: 'Sebastian Antonio marti Cabrera ',
         edad: '22',
         sintoma: 'ajsdjsjdajsdjasjdjasdjasjd',
         color: 'green',
         sexo: 'Femenino',
         rut: '19823772.1',
         habitacion: '3-5',
         medicoEncargado: 'Doctora Patricia Alvarez',

         ultimoChequeo:'28 de septiembre, 17:15hrs',
         chequeadoPor:'Enferma Catalina Riquelme'

       },
       {
        // imgURL: 'https://www.esportmaniacos.com/wp-content/uploads/2020/09/samira.jpg',
         nombre: 'Sebastian Antonio marti Cabrera ',
         edad: '22',
         sintoma: 'malardo maximodsdasdasdads ',
         color: 'green',
         sexo: 'Femenino',
         rut: '19823772.1',
         habitacion: '3-6',
         medicoEncargado: 'Doctora Patricia Alvarez',

         ultimoChequeo:'28 de septiembre, 17:15hrs',
         chequeadoPor:'Enferma Catalina Riquelme'

       },
       {
        // imgURL: 'https://www.esportmaniacos.com/wp-content/uploads/2020/09/samira.jpg',
         nombre: 'Sebastian Antonio marti Cabrera ',
         edad: '22',
         sintoma: 'malardo maximodsadsdasdasdas ',
         color: 'green',
         sexo: 'Femenino',
         rut: '19823772.1',
         habitacion: '3-7',
         medicoEncargado: 'Doctora Patricia Alvarez',

         ultimoChequeo:'28 de septiembre, 17:15hrs',
         chequeadoPor:'Enferma Catalina Riquelme'

       },

      {
        //  imgURL: 'https://i.blogs.es/68e984/jinx_article_banner/450_1000.jpg',
          nombre: 'Anibal Escalante Verdura Antonia',
          edad: '22',
          sintoma: 'Muy Nashe, otro nashe nashe jajaj',
          color: 'green',
          sexo: 'Femenino',
          rut: '87.212.212.7',
          habitacion: '3-8',
          medicoEncargado: 'Doctora Patricia Alvarez',

          ultimoChequeo:'23 de septiembre, 17:15hrs',
          chequeadoPor:'Enferma Catalina Riquelme'

        },
        {
          // imgURL: 'https://i.blogs.es/68e984/jinx_article_banner/450_1000.jpg',
           nombre: 'Exequiel Rodrigo Andrade Rojas ',
           edad: '20',
           sintoma: 'Dolor de cuello y constantes dolores de cabeza',
           color: 'green',
           sexo: 'Masculino',
           rut: '20271557-5',
           habitacion: '4-1',
           medicoEncargado: 'Doctora Patricia Alvarez',
           ultimoChequeo:'29 de septiembre, 12:20hrs',
           chequeadoPor:'Enferma Catalina Riquelme'
         },
         {
          // imgURL: 'https://i.blogs.es/68e984/jinx_article_banner/450_1000.jpg',
           nombre: 'Exequiel Rodrigo Andrade Rojas ',
           edad: '20',
           sintoma: 'Dolor de cuello y constantes dolores de cabeza',
           color: 'green',
           sexo: 'Masculino',
           rut: '20271557-5',
           habitacion: '4-2',
           medicoEncargado: 'Doctora Patricia Alvarez',
           ultimoChequeo:'29 de septiembre, 12:20hrs',
           chequeadoPor:'Enferma Catalina Riquelme'
         },
         {
          // imgURL: 'https://i.blogs.es/68e984/jinx_article_banner/450_1000.jpg',
           nombre: 'Exequiel Rodrigo Andrade Rojas ',
           edad: '20',
           sintoma: 'Dolor de cuello y constantes dolores de cabeza',
           color: 'green',
           sexo: 'Masculino',
           rut: '20271557-5',
           habitacion: '4-3',
           medicoEncargado: 'Doctora Patricia Alvarez',
           ultimoChequeo:'29 de septiembre, 12:20hrs',
           chequeadoPor:'Enferma Catalina Riquelme'
         },
         {
          // imgURL: 'https://i.blogs.es/68e984/jinx_article_banner/450_1000.jpg',
           nombre: 'Exequiel Rodrigo Andrade Rojas ',
           edad: '20',
           sintoma: 'Dolor de cuello y constantes dolores de cabeza',
           color: 'green',
           sexo: 'Masculino',
           rut: '20271557-5',
           habitacion: '4-4',
           medicoEncargado: 'Doctora Patricia Alvarez',
           ultimoChequeo:'29 de septiembre, 12:20hrs',
           chequeadoPor:'Enferma Catalina Riquelme'
         },
         {
          // imgURL: 'https://i.blogs.es/68e984/jinx_article_banner/450_1000.jpg',
           nombre: 'Exequiel Rodrigo Andrade Rojas ',
           edad: '20',
           sintoma: 'Dolor de cuello y constantes dolores de cabeza',
           color: 'green',
           sexo: 'Masculino',
           rut: '20271557-5',
           habitacion: '4-4',
           medicoEncargado: 'Doctora Patricia Alvarez',
           ultimoChequeo:'29 de septiembre, 12:20hrs',
           chequeadoPor:'Enferma Catalina Riquelme'
         },
         {
          // imgURL: 'https://i.blogs.es/68e984/jinx_article_banner/450_1000.jpg',
           nombre: 'Exequiel Rodrigo Andrade Rojas ',
           edad: '20',
           sintoma: 'Dolor de cuello y constantes dolores de cabeza',
           color: 'green',
           sexo: 'Masculino',
           rut: '20271557-5',
           habitacion: '4-5',
           medicoEncargado: 'Doctora Patricia Alvarez',
           ultimoChequeo:'29 de septiembre, 12:20hrs',
           chequeadoPor:'Enferma Catalina Riquelme'
         },
         {
          // imgURL: 'https://www.esportmaniacos.com/wp-content/uploads/2020/09/samira.jpg',
           nombre: 'Sebastian Antonio marti Cabrera ',
           edad: '22',
           sintoma: 'Fractura de pierna grave',
           color: 'green',
           sexo: 'Femenino',
           rut: '19823772.1',
           habitacion: '4-6',
           medicoEncargado: 'Doctora Patricia Alvarez',

           ultimoChequeo:'28 de septiembre, 17:15hrs',
           chequeadoPor:'Enferma Catalina Riquelme'

         }, 
         {
          // imgURL: 'https://www.esportmaniacos.com/wp-content/uploads/2020/09/samira.jpg',
           nombre: 'Sebastian Antonio marti Cabrera ',
           edad: '22',
           sintoma: 'Fractura de pierna grave',
           color: 'green',
           sexo: 'Femenino',
           rut: '19823772.1',
           habitacion: '4-7',
           medicoEncargado: 'Doctora Patricia Alvarez',

           ultimoChequeo:'28 de septiembre, 17:15hrs',
           chequeadoPor:'Enferma Catalina Riquelme'

         },
         {
          // imgURL: 'https://www.esportmaniacos.com/wp-content/uploads/2020/09/samira.jpg',
           nombre: 'Sebastian Antonio marti Cabrera ',
           edad: '22',
           sintoma: 'Fractura de pierna grave',
           color: 'green',
           sexo: 'Femenino',
           rut: '19823772.1',
           habitacion: '4-8',
           medicoEncargado: 'Doctora Patricia Alvarez',

           ultimoChequeo:'28 de septiembre, 17:15hrs',
           chequeadoPor:'Enferma Catalina Riquelme'

         },

      ]

  }
  ngOnInit(): void {
  }

}
