# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# PATIENTS
wanjiru = Patient.create(patient_name: "Wanjiru K", age:65, gender:"Female", diagnosis:"Hypertension")
kinuthia = Patient.create(patient_name: "Kinuthia M", age:74, gender:"Male", diagnosis:"Obesity")

# DOCTORS
jason = Doctor.create(name: "J Walu", age: 34, gender: "Male", specialist:"General")
lola = Doctor.create(name: "Lola J", age: 43, gender: "Female", specialist:"Peaditrician")

# APPOINTMENT
Appointment.create(patient_id: wanjiru.id, doctor_id: jason.id, apointment_date:'01-04-2023')
Appointment.create(patient_id: kinuthia.id, doctor_id: lola.id, apointment_date:'06-03-2023')