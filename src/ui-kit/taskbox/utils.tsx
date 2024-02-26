import { TodoId } from "../../types/types";

export const dropDownArrow = (id: string | TodoId) => {
 const elem: HTMLElement | null = document.getElementById(id as string);
 if (elem!.style.height !== '300px' && elem!.style.height !== '0px')  elem!.style.height = '300px';
 else if (elem!.style.height === '300px') elem!.style.height = '0px';
 else if (elem!.style.height === '0px') elem!.style.height = '300px';
 
}

export const linetrough = (id: string | TodoId) => {
    const elem: HTMLElement | null | undefined = document.getElementById(id as string)?.parentElement;
    const parentDiv: HTMLElement | null | undefined = elem?.getElementsByTagName('div')[0];
    const title: HTMLElement | null | undefined = parentDiv?.getElementsByTagName('span')[1];
    if (title!.style.textDecoration === 'line-through') title!.style.textDecoration = 'none';
    else title!.style.textDecoration = 'line-through';
} // terminar esta función, para subrayar el texto de las tareas
