import Task from "../models/Task.js";
export const getTasks=async(req,res)=>res.json(await Task.find());
export const createTask=async(req,res)=>res.json(await Task.create({title:req.body.title}));
export const deleteTask=async(req,res)=>{await Task.findByIdAndDelete(req.params.id);res.json({message:"Deleted"});}
export const updateTask=async(req,res)=>{const t=await Task.findById(req.params.id);t.completed=!t.completed;await t.save();res.json(t);}
