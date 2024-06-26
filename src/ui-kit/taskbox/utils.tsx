import { TodoId } from "../../types/types";

export const dropDownArrow = (id: string | TodoId) => {

 const elem: HTMLElement | null = document.getElementById(id as string);
 const svg = elem?.parentElement?.firstChild?.lastChild as SVGSVGElement;
 if (elem!.style.height !== '300px' && elem!.style.height !== '0px')  elem!.style.height = '300px';
 else if (elem!.style.height === '300px') elem!.style.height = '0px';
 else if (elem!.style.height === '0px') elem!.style.height = '300px';
 if (svg.style.transform !== 'rotate(0deg)' && svg.style.transform !== 'rotate(180deg)') svg.style.transform = 'rotate(0deg)';
 if (svg.style.transform === 'rotate(0deg)') svg.style.transform = 'rotate(180deg)';
 else if (svg.style.transform === 'rotate(180deg)') svg.style.transform = 'rotate(0deg)';
}

/*  ------------------------- FUNCTION REPLACED BY CONDITIONAL CSS STATEMENT -------------------------

export const linetrough = (id: string | TodoId) => {
    const elem: HTMLElement | null | undefined = document.getElementById(id as string)?.parentElement;
    const parentDiv: HTMLElement | null | undefined = elem?.getElementsByTagName('div')[0];
    const title: HTMLElement | null | undefined = parentDiv?.getElementsByTagName('span')[1];
    if (title!.style.textDecoration === 'line-through') title!.style.textDecoration = 'none';
    else title!.style.textDecoration = 'line-through';
} 
 */