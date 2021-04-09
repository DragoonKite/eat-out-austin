module.exports = {
    format_name: name => {
        return name.replace(/\s/g, '-')
    },

    format_phone: phone => {
        phone=phone.substring(0, 3)+ '-' + phone.substring(3, 6) + '-' + phone.substring(6, phone.length);
        return phone;
    }
}


