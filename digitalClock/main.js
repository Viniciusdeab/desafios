(()=>{

    setInterval(() => {
                
        let hours = document.getElementById('hours');
        let minutes = document.getElementById('minutes');
        let seconds = document.getElementById('seconds');
        let ampm = document.getElementById('ampm');

        let hh =document.getElementById('hh');
        let mm =document.getElementById('mm');
        let ss =document.getElementById('ss');

        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();
        let am = h >=12 ? "PM" : "AM";

        // converter 24hrs para 12hrs;

        if(h > 12){
            h = h - 12;
        }

        //adicionando zero antes do numero;
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        hours.innerHTML = h;
        minutes.innerHTML = m;
        seconds.innerHTML = s;
        ampm.innerHTML = am;

        hh.style.strokeDashoffset = 440 - (400 * h) / 12;
        // relgogio de 12 horas;
        mm.style.strokeDashoffset = 440 - (400 * m) / 60;
        // relogio de 60 minutos;
        ss.style.strokeDashoffset = 440 - (400 * s) / 60;
        // relogio de 60 segundos;


    });

})();