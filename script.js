{\rtf1\ansi\ansicpg1252\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww28600\viewh16040\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // LANGUAGE SYSTEM\
const translations = \{\
    en: \{\
        bookingTitle: "Book Drone Spraying Service",\
        name: "Farmer Name",\
        state: "State",\
        village: "Village",\
        crop: "Crop Type",\
        land: "Land Size (in acres)",\
        submit: "Submit Booking",\
        success: "Booking saved successfully!",\
\
        dashboardTitle: "Drone Spray Coverage Calculator",\
        acres: "Enter Acres",\
        calculate: "Calculate"\
    \},\
    hi: \{\
        bookingTitle: "\uc0\u2337 \u2381 \u2352 \u2379 \u2344  \u2360 \u2381 \u2346 \u2381 \u2352 \u2375  \u2360 \u2375 \u2357 \u2366  \u2348 \u2369 \u2325  \u2325 \u2352 \u2375 \u2306 ",\
        name: "\uc0\u2325 \u2367 \u2360 \u2366 \u2344  \u2325 \u2366  \u2344 \u2366 \u2350 ",\
        state: "\uc0\u2352 \u2366 \u2332 \u2381 \u2351 ",\
        village: "\uc0\u2327 \u2366 \u2306 \u2357 ",\
        crop: "\uc0\u2347 \u2360 \u2354  \u2325 \u2366  \u2346 \u2381 \u2352 \u2325 \u2366 \u2352 ",\
        land: "\uc0\u2349 \u2370 \u2350 \u2367  \u2325 \u2366  \u2310 \u2325 \u2366 \u2352  (\u2319 \u2325 \u2337 \u2364  \u2350 \u2375 \u2306 )",\
        submit: "\uc0\u2348 \u2369 \u2325 \u2367 \u2306 \u2327  \u2332 \u2350 \u2366  \u2325 \u2352 \u2375 \u2306 ",\
        success: "\uc0\u2348 \u2369 \u2325 \u2367 \u2306 \u2327  \u2360 \u2347 \u2354 \u2340 \u2366 \u2346 \u2370 \u2352 \u2381 \u2357 \u2325  \u2360 \u2375 \u2357  \u2361 \u2379  \u2327 \u2312 !",\
\
        dashboardTitle: "\uc0\u2337 \u2381 \u2352 \u2379 \u2344  \u2360 \u2381 \u2346 \u2381 \u2352 \u2375  \u2325 \u2376 \u2354 \u2325 \u2369 \u2354 \u2375 \u2335 \u2352 ",\
        acres: "\uc0\u2319 \u2325 \u2337 \u2364  \u2342 \u2352 \u2381 \u2332  \u2325 \u2352 \u2375 \u2306 ",\
        calculate: "\uc0\u2327 \u2339 \u2344 \u2366  \u2325 \u2352 \u2375 \u2306 "\
    \}\
\};\
\
function setLang(lang) \{\
    localStorage.setItem("lang", lang);\
    applyLang();\
\}\
\
function applyLang() \{\
    let lang = localStorage.getItem("lang") || "en";\
    let t = translations[lang];\
\
    if (document.getElementById("bookingTitle"))\
        document.getElementById("bookingTitle").innerText = t.bookingTitle;\
\
    if (document.getElementById("name"))\
        document.getElementById("name").placeholder = t.name;\
\
    if (document.getElementById("state"))\
        document.getElementById("state").placeholder = t.state;\
\
    if (document.getElementById("village"))\
        document.getElementById("village").placeholder = t.village;\
\
    if (document.getElementById("crop"))\
        document.getElementById("crop").placeholder = t.crop;\
\
    if (document.getElementById("land"))\
        document.getElementById("land").placeholder = t.land;\
\
    if (document.getElementById("submitBtn"))\
        document.getElementById("submitBtn").innerText = t.submit;\
\
    if (document.getElementById("dashboardTitle"))\
        document.getElementById("dashboardTitle").innerText = t.dashboardTitle;\
\
    if (document.getElementById("acres"))\
        document.getElementById("acres").placeholder = t.acres;\
\
    if (document.getElementById("calcBtn"))\
        document.getElementById("calcBtn").innerText = t.calculate;\
\}\
\
window.onload = applyLang;\
\
// BOOKING FORM STORAGE\
if (document.getElementById("bookingForm")) \{\
    document.getElementById("bookingForm").addEventListener("submit", function(e) \{\
        e.preventDefault();\
\
        let farmer = \{\
            name: document.getElementById("name").value,\
            state: document.getElementById("state").value,\
            village: document.getElementById("village").value,\
            crop: document.getElementById("crop").value,\
            land: document.getElementById("land").value\
        \};\
\
        let data = JSON.parse(localStorage.getItem("farmers")) || [];\
        data.push(farmer);\
\
        localStorage.setItem("farmers", JSON.stringify(data));\
\
        document.getElementById("msg").innerText = "Saved!";\
    \});\
\}\
\
// CALCULATOR\
function calculate() \{\
    let acres = document.getElementById("acres").value;\
    let lang = localStorage.getItem("lang") || "en";\
\
    let time = acres * 5;\
\
    if (lang === "hi") \{\
        document.getElementById("result").innerText = "\uc0\u2360 \u2350 \u2351 : " + time + " \u2350 \u2367 \u2344 \u2335 ";\
    \} else \{\
        document.getElementById("result").innerText = "Time: " + time + " minutes";\
    \}\
\}}