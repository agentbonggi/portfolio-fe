const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1";

export interface Project { id:number;title:string;slug:string;description:string;technologies:string[];project_url?:string;github_url?:string; }
export interface Skill { id:number;name:string;category:string;proficiency?:number; }
export interface Experience { id:number;title:string;company:string;start_date:string;end_date?:string;type:string; }

export async function getProjects() { const r=await fetch(`${API_URL}/projects`); return r.json(); }
export async function getSkills() { const r=await fetch(`${API_URL}/skills`); return r.json(); }
export async function getExperience() { const r=await fetch(`${API_URL}/experience`); return r.json(); }
export async function submitContact(data:{name:string;email:string;subject?:string;message:string}) {
  return fetch(`${API_URL}/contact`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
}
