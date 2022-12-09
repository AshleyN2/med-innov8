class PatientsController < ApplicationController
    def show
        patient = Patient.find(params[:id])
        render json: patient
    end

    def create
        patient = Patient.create!(patient_params)
        if patient 
            render json: patient
        else
            render json: {error: "Patient not found"} 
    end

private 

def patient_params
    params.permit(:patient_name, :age, :gender, :diagnosis)
end

end
