var pages = [ 
"https://carijandaonline.blogspot.com/p/cari-janda-online.html",
"https://jandacantikkaya.blogspot.com/p/janda-cantik-kaya.html",
"https://jandamudaseksi.blogspot.com/p/janda-muda-seksi.html",
"https://jutaanjanda.blogspot.com/p/jutaan-janda.html",
"https://sijandakembang.blogspot.com/p/si-janda-kembang.html",
"https://surgajanda.blogspot.com/p/surga-janda.html",
];
function randomPage() { 
return pages[Math.round(Math.random() * (pages.length - 1))]; 
} 
location.href= randomPage(); 
