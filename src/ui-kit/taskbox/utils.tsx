
export const dropDownArrow = (id: string) => {
 const elem: HTMLElement | null = document.getElementById(id);
 if (elem!.style.height !== '200px' && elem!.style.height !== '0px')  elem!.style.height = '200px';
 else if (elem!.style.height === '200px') elem!.style.height = '0px';
 else if (elem!.style.height === '0px') elem!.style.height = '200px';
 
}

export const linetrough = (id: string) => {
    const elem: HTMLElement | null | undefined = document.getElementById(id)?.parentElement;
    const parentDiv: HTMLElement | null | undefined = elem?.getElementsByTagName('div')[0];
    const title: HTMLElement | null | undefined = parentDiv?.getElementsByTagName('span')[1];
    if (title!.style.textDecoration === 'line-through') title!.style.textDecoration = 'none';
    else title!.style.textDecoration = 'line-through';
} // terminar esta función, para subrayar el texto de las tareas
