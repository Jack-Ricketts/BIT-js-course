class Maisas {

    static visoBulviu = 0;

    constructor() {
        this.bulviu = 0;
    }

    deti = kiek => {
        this.bulviu += kiek;
        Maisas.visoBulviu += kiek;
    }

    kiekMaise = () => {
        console.log('maise yra: ' + this.bulviu);
    }

    kiekYraViso = () => {
        console.log('VISO: ' + this.constructor.visoBulviu);
    }
}

const m1 = new Maisas();
const m2 = new Maisas();
const m3 = new Maisas();
const m4 = new Maisas();

m1.deti(20);
m1.deti(20);
m2.deti(20);
m3.deti(20);
m3.deti(20);
m3.deti(20);
m4.deti(80);

m1.kiekMaise();
m2.kiekMaise();
m3.kiekMaise();
m4.kiekYraViso();

console.log(m1);



// O tai kiek is vis yra tu bulviu???


class Troleibusas {

    static visiKeleiviai = 0;

    static bendrasKeleiviuSkaicius = keleiviuSkaicius => {
        this.constructor.visiKeleiviai += keleiviuSkaicius;
        // Troleibusas.visiKeleiviai += keleiviuSkaicius;
        // this.constructor === klases varda
    }

    constructor() {
        this.keleiviuSkaicius = 0;
    }

    ilipa = keleiviuSkaicius => {
        this.keleiviuSkaicius += keleiviuSkaicius;
        Troleibusas.bendrasKeleiviuSkaicius(keleiviuSkaicius);
    }

    islipa = keleiviuSkaicius => {
        Troleibusas.bendrasKeleiviuSkaicius(-1 * Math.min(this.keleiviuSkaicius, keleiviuSkaicius));
        this.keleiviuSkaicius = Math.max(0, this.keleiviuSkaicius -= keleiviuSkaicius);
    }

    keleiviuSkaiciusVisuoseTroleibusuose = () => {
        console.log('Visais Trūlais važiuoja: ' + Troleibusas.visiKeleiviai + ' keleivių')
    }

    vaziuoja = () => {
        console.log('Trūlu važiuoja: ' + this.keleiviuSkaicius + ' keleivių')
    }
}

const t4 = new Troleibusas();
const t10 = new Troleibusas();


t4.ilipa(10);
t10.ilipa(10);
t4.ilipa(10);
t10.ilipa(10);
t4.islipa(80);

t4.keleiviuSkaiciusVisuoseTroleibusuose();


class Kibiras1 {

    static visiAkmenys = 0;

    static bendrasAkmenuSkaicius = akmenuSkaicius => {
        this.visiAkmenys += akmenuSkaicius;
    }

    static akmenuSkaiciusVisuoseKibiruose = () => {
        console.log('Prinkta visuose: ' + this.visiAkmenys);
    }

    constructor() {
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni = () => {
        this.akmenuKiekis++;
        this.constructor.bendrasAkmenuSkaicius(1)
    }

    pridetiDaugAkmenu = (kiekis) => {
        this.akmenuKiekis += kiekis;
        this.constructor.bendrasAkmenuSkaicius(kiekis);
    }

    kiekPririnktaAkmenu = () => {
        console.log('Prinkta: ' + this.akmenuKiekis);
    }
}

const k1 = new Kibiras1();
const k2 = new Kibiras1();

k1.prideti1Akmeni();
k2.pridetiDaugAkmenu(7);
k2.prideti1Akmeni();


Kibiras1.akmenuSkaiciusVisuoseKibiruose();




class Pinigine {

    constructor() {
        this.popieriniaiPinigai = [];
        this.metaliniaiPinigai = [];
    }

    ideti = kiekis => {
        if (kiekis > 2) {
            this.popieriniaiPinigai.push(kiekis);
        } else {
            this.metaliniaiPinigai.push(kiekis);
        }
    }

    skaiciuoti = () => {
        let popSuma = 0;
        let metSuma = 0;

        // const reducer = (previousValue, currentValue) => previousValue + currentValue;
        // popSuma = this.popieriniaiPinigai.reduce(reducer);
        // metSuma = this.metaliniaiPinigai.reduce(reducer);

        this.popieriniaiPinigai.forEach(p => popSuma += p);
        this.metaliniaiPinigai.forEach(p => metSuma += p);


        console.log('popierius: ' + this.popieriniaiPinigai.length);
        console.log('metalas: ' + this.metaliniaiPinigai.length);
        console.log('Piniginėje yra: ' + (popSuma + metSuma));
    }

    monetos = () => {
        let metSuma = 0;
        // const reducer = (previousValue, currentValue) => previousValue + currentValue;
        // metSuma = this.metaliniaiPinigai.reduce(reducer);
        this.metaliniaiPinigai.forEach(p => metSuma += p);
        console.log('metalas: ' + this.metaliniaiPinigai.length);
        console.log('Piniginėje yra: ' + metSuma);
    }

    banknotai = () => {
        let popSuma = 0;
        // const reducer = (previousValue, currentValue) => previousValue + currentValue;
        // popSuma = this.popieriniaiPinigai.reduce(reducer);
        this.popieriniaiPinigai.forEach(p => popSuma += p);
        console.log('popierius: ' + this.popieriniaiPinigai.length);
        console.log('Piniginėje yra: ' + popSuma);
    }

}

const p = new Pinigine();

p.ideti(10);
p.ideti(0.9);
p.ideti(0.7);
p.ideti(10);
p.ideti(10);
p.ideti(0.8);
p.ideti(0.7);


// p.skaiciuoti();
p.banknotai();
p.monetos();


console.log(p);