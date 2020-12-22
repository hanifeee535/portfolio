 import {FaGraduationCap} from 'react-icons/fa';
 import {BsFillAwardFill} from 'react-icons/bs';
//  import {GrUserWorker} from 'react-icons/gr'
 const CV = [
    {
        id :1,
        categary: 'Education',
        icon : <FaGraduationCap/>,
        data : [
            {
                icon : <FaGraduationCap/>,
                id:1,
                institution: 'Sylhet Engineering College',
                mainInstitution : 'Shahjalal University of Science & Technology',
                time: '2015-2020',
                name : 'BSC in Electrical & ELectronic Engineering'
            },
            {
                icon : <FaGraduationCap/>,
                id:2,
                institution: 'Rajendrapur Cantonment Public College',
                mainInstitution : 'Dhaka Board',
                time: '2014',
                name : 'Higher Secondary Certificate (HSC)'
            },
            {
                icon : <FaGraduationCap/>,
                id:3,
                institution: 'Dewangonj Islamia High School',
                mainInstitution : 'Dhaka Board',
                time: '2012',
                name : 'Secondary School Certificate (SSC)'
            },
        ]
    },
    {
        id :2,
        categary: 'Courses',
        data : [
            {
                icon:<BsFillAwardFill/>,
                id:1,
                institution: 'Learning and Earning Development Project (LEDP)',
                mainInstitution : 'ICT Division , Peoples republic of Bangladesh',
                time: '2020',
                name : 'Web Designing and Development'
            },
            {
                icon:<BsFillAwardFill/>,
                id:2,
                institution: 'Training institute for Chemical Industries (TICI) ',
                mainInstitution : 'Bangladesh Chemical Industries Corporation (BCIC)',
                time: '2020',
                name : 'Industrial training'
            },
            // {
            //     id:3,
            //     institution: 'Dewangonj Islamia High School',
            //     mainInstitution : 'Dhaka Board',
            //     time: '2012',
            //     name : 'Secondary School Certificate (SSC)'
            // },
        ]
    },
    {
        id :3,
        categary: 'Experience',
        data : [
            // {
            //     icon:<GrUserWorker/>,
            //     id:1,
            //     institution: 'Learning and Earning Development Project (LEDP)',
            //     mainInstitution : 'ICT Division , Peoples republic of Bangladesh',
            //     time: '2020',
            //     name : 'Web Designing and Development'
            // },
            // {
            //     icon:<GrUserWorker/>,
            //     id:2,
            //     institution: 'Training institute for Chemical Industries (TICI) ',
            //     mainInstitution : 'Bangladesh Chemical Industries Corporation (BCIC)',
            //     time: '2020',
            //     name : 'Industrial training'
            // },
            // {
            //     id:3,
            //     institution: 'Dewangonj Islamia High School',
            //     mainInstitution : 'Dhaka Board',
            //     time: '2012',
            //     name : 'Secondary School Certificate (SSC)'
            // },
        ]
    }
]

export default CV