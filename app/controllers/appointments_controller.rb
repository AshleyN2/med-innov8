class AppointmentsController < ApplicationController
    def show
        appointment = Appointment.find(params[:id])
        render json: appointment
    end

    def create
        appointment = Appointment.create!(appointment_params)
        if appointment 
            render json: appointment
        else
            render json: {error: "Appointment not found"} 
    end

private 

def appointment_params
    params.permit(:doctor_id, :patient_id, :apointment_date)
end

end
end
