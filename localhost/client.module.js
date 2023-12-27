import { 
    o_variables, 
    f_s_css_from_o_variables,
    f_add_css,
} from "https://deno.land/x/f_add_css@0.8/mod.js"

  import {
    f_o_html__and_make_renderable
} from "https://deno.land/x/f_o_html_from_o_js@2.0/mod.js"


// Importing the necessary modules from a CDN
// import * as monaco from 'https://cdn.jsdelivr.net/npm/monaco-editor@latest/esm/vs/editor/editor.api.js';
// import * as monaco from 'https://unpkg.com/monaco-editor@latest/esm/vs/editor/editor.api.js';
import * as monaco from 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/+esm';


f_add_css(
    f_s_css_from_o_variables(
        o_variables
    )
)
f_add_css(
    `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css`
    // `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js`
)

let s_id_monaco_editor = 'monaco_editor'
//select > publish to web in google docs !!!
let s_sheet_id = `2PACX-1vSIiL-NqEDHMSPvf01eNo-h5ObV5UVeoFQCCTA1jbOf3r5UA_W3KU8CAxXuDIMekBW7ZfweDU6rBT5j`;
let o_data = await fetch(
    `https://docs.google.com/spreadsheets/d/e/${s_sheet_id}/pub?output=csv`
)
let s_text = await o_data.text();
s_text = s_text.replaceAll('\r', '');
let a_s_line = s_text.split('\n');
let s_separator = ',';
let a_s_prop = a_s_line[0].split(s_separator)
console.log(a_s_prop)


let o = f_o_html__and_make_renderable(
    {
        class: "a_o",
        a_o: [
            {
                id: s_id_monaco_editor, 
            }
        ]
    }
);
document.body.appendChild(o)


f_add_css(
    `
    
    #${s_id_monaco_editor}{
        height: 100%;
        width: 100%;
    }
    .a_o{
        display:flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
    }
    .o{
        display:flex;
        flex-direction:row;
    }
    `
)


window.setTimeout(function(){

    monaco.editor.create(document.getElementById(s_id_monaco_editor), {
        value: '// Type your code here...',
        language: 'javascript'
    });
},10000)