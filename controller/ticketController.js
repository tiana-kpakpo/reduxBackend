// import ticket from "../model/ticketModel";
import ticketModel from '../model/ticketModel.js';

// fetching all tickets
const getTickets = async (req, res) => {
    try {
        const tickets = await ticketModel.find()
        res.status(200).send(tickets)
        
    } catch (error) {
        console.log(error)
        
    } 
}



const addTicket = async(req, res) => {
    const {title, description} = req.body;

    try {
        const ticket = new ticketModel({
            title, 
            description,
        });

        const result = await ticket.save()
        if(result) {
            res.status(201).send(result)
        }
        
    } catch (error) {
        console.log(error)
        
    }
}


const deleteTicket = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedTicket = await ticketModel.findByIdAndDelete(id)
        if(deletedTicket) {
            res.status(204).send(deletedTicket)
        }
        
    } catch (error) {
        console.log(error)
    }

}



// depends on use case on the front end
// fetch the data record and toggle btn worked on to be true or false
const updateTicket = async (req, res) => {
    const {id} = req.params

    try {
        const ticket = await ticketModel.findById(id)
        // console.log(ticket)
        const updatedTicket = await ticketModel.findByIdAndUpdate(
            {_id: id}, 
            {workedOn:!ticket.workedOn}, 
            {new: true}
            );

        if (updatedTicket) {
            res.send(updatedTicket);
        }  
        
    } catch (error) {
        console.log(error)
        
    }

}



export default {
    // allTickets,
    getTickets,
    addTicket,
    deleteTicket,
    updateTicket
}