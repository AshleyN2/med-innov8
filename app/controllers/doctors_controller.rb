class DoctorsController < ApplicationController
    def show
        doctor = Doctor.find(params[:id])
        render json: doctor
    end

    def create
        doctor = Doctor.create!(doctor_params)
        if patient 
            render json:doctor
        else
            render json: {error: "Doctor not found"} 
    end

private 

def doctor_params
    params.permit(:name, :age, :gender, :specialist)
end

end
end
