import axios from 'axios'

export async function setStudents(name: string, age: number, gender: number, ethnicity: number, paramentalEducation: number, studyTimeWeekly: number, absenses: number, tutoring: number, parentalSuporte: number, extracurricular: number, sports: number, music: number, voluteering: number) {
    try {
        const request = await axios.post('https://bcfe-179-162-218-180.ngrok-free.app/student-performance/api/v1/',
            {
                name: name,
                age: age,
                gender: gender,
                ethnicity: ethnicity,
                paramental_education: paramentalEducation,
                study_time_weekly: studyTimeWeekly,
                absenses: absenses,
                tutoring: tutoring,
                parental_suporte: parentalSuporte,
                extracurricular: extracurricular,
                sports: sports,
                music: music,
                voluteering: voluteering
            }
        );

        if (request.status === 201) {
            return request
        }   
    } catch (error) {
        return []
    }
}

export async function getStudents() {
    try {
        const request = await axios.get('https://bcfe-179-162-218-180.ngrok-free.app/student-performance/api/v1/');
        if (request.status === 200) {
            return request.data;
        }      
    } catch (error) {
        console.log(error)
        return []
    }
}