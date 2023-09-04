
function setMessage(lovePercentage) {
    const hasilText = document.getElementById("hasil-text");

    if (lovePercentage >= 100) {
        hasilText.textContent =
            "Selamat anda cocok silahkan segera ke KUA sebelum pasangan anda ditikung teman sebelah anda";
    } else if (lovePercentage >= 80 && lovePercentage <= 99) {
        hasilText.textContent =
            "Pepet Terus sampai jadi, tapi inget batasan ya! janganlah anda berbuat zina";
    } else if (lovePercentage >= 65 && lovePercentage <= 79) {
        hasilText.textContent =
            "Kamu HTSan ya? kalo aku mah yang pasti-pasti aja atau mungkin dia ada yang lain?";
    } else if (lovePercentage >= 45 && lovePercentage <= 64) {
        hasilText.textContent =
            "Yakin ngga dia serius? Atau kamu buat pelariannya aja";
    } else {
        hasilText.textContent = "Kata aku sih ngga cocok ya, mending cari yang lain!";
    }

}

function updateProgressBar(lovePercentage) {
    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");

    let width = 0;
    const interval = setInterval(() => {
        if (width >= lovePercentage) {
            clearInterval(interval);
            setMessage(lovePercentage);

        } else {
            width += 5;
            progressBar.style.width = width + "%";
            progressText.innerHTML = width + "%";
        }
    }, 200);
}

function calculateLovePercentage(name1, name2) {
    const name1Lower = name1.toLowerCase();
    const name2Lower = name2.toLowerCase();
    let commonCount = 0;

    for (const char of name1Lower) {
        if (name2Lower.includes(char)) {
            commonCount++;
        }
    }

    const nameLengthSum = name1Lower.length + name2Lower.length;
    const lovePercentage = (commonCount / nameLengthSum) * 100;
    const loveFinal = lovePercentage * 2;

    return loveFinal;
}

function calculateNormal() {
    return Math.floor(Math.random() * 101);
}

function validateForm() {
    const formKamu = document.forms["form-kamu"];
    const formCrush = document.forms["form-crush"];

    if (formKamu['nama-kamu'].value === "" || formCrush['nama-crush'].value === "") {
        alert("Nama harus diisi!");
        return false;
    }
    if (formKamu['nama-kamu'].value === formCrush['nama-crush'].value) {
        alert("Nama harus berbeda!");
        return false;
    }

    const jenisKelaminKamu = formKamu["jenis_kelamin_kamu"];
    const jenisKelaminCrush = formCrush["jenis_kelamin_crush"];

    if (jenisKelaminKamu.value === "") {
        alert("Pilih jenis kelamin kamu!");
        return false;
    }

    if (jenisKelaminCrush.value === "") {
        alert("Pilih jenis kelamin pasanganmu!");
        return false;
    }

    const lovePercentage = calculateNormal();
    updateProgressBar(lovePercentage);
    return true;

}

function validateGender() {
    const cewekRadioKamu = document.getElementById("cewek-radio-kamu");
    const cowokRadioKamu = document.getElementById("cowok-radio-kamu");
    const cewekRadioCrush = document.getElementById("cewek-radio-crush");
    const cowokRadioCrush = document.getElementById("cowok-radio-crush");

    if (cewekRadioKamu.checked == true) {
        cowokRadioCrush.checked = true;
    } else if (cowokRadioKamu.checked == true) {
        cewekRadioCrush.checked = true;
    } else if (cewekRadioCrush.checked == true) {
        cowokRadioKamu.checked = true;
    } else if (cowokRadioCrush.checked == true) {
        cewekRadioKamu.checked = true;
    }
}
