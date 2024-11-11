import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useState } from 'react';

export default function TestDriveComp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telp: '',
    carModel: 'Jenis Kendaraan',
    dealer: 'Pilih Dealer',
    Date: '',
    inputMessage: '',
  });

  const dealerWhatsAppNumbers = {
    'Pilih Dealer': '',
    'Mampang Jakarta': '+6281230002453', 
    'BalikPapan': '+6281230002453', 
    'Medan': '+6281230002453', 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, telp, carModel, dealer, dateTestDrive, inputMessage } = formData;

    if (carModel === 'Jenis Kendaraan' || dealer === 'Pilih Dealer') {
      alert('Silakan pilih Jenis Kendaraan dan Dealer terlebih dahulu.');
      return;
    }

    const data = {
      Name: name,
      Email: email,
      Telp: telp,
      Model: carModel,
      Dealer: dealer,
      Date: dateTestDrive,
      Message: inputMessage,
    };

    try {
      const response = await fetch('https://api.apispreadsheets.com/data/HOOYQWnIVKbIX404/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
      });

      if (response.status === 201) {
        alert('Berhasil Terhubung');

        // Kirim pesan WhatsApp setelah data disimpan di Spreadsheet
        const whatsappNumber = dealerWhatsAppNumbers[dealer];
        if (whatsappNumber) {
          const messageWa = `Halo, Saya ${name} \nsaya ingin Test Drive *${carModel}* .\nEmail: ${email}\nTelp: ${telp}. \nDealer yang diinginkan: ${dealer}.\n Jadwal Services: ${dateTestDrive}\nPesan: ${inputMessage}`;

          const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageWa)}`;
          window.open(whatsappUrl, '_blank');
        } else {
          alert('Silakan pilih dealer terlebih dahulu.');
        }
      } else {
        alert('Terjadi kesalahan saat menyimpan data.');
      }
    } catch (error) {
      alert('Terjadi kesalahan koneksi.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit} target='_blank'>
    <Form.Group className="mb-3" controlId="formName">
      <Form.Label>Nama</Form.Label>
      <Form.Control
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Masukkan Nama Lengkap Anda"
      />
    </Form.Group>
      <Row className="mb-3">

    <Form.Group as={Col} controlId="formTelp">
      <Form.Label>Telp</Form.Label>
      <Form.Control
        type="tel"
        name="telp"
        value={formData.telp}
        onChange={handleInputChange}
        placeholder="Masukkan Nomor Telp Anda"
      />
    </Form.Group>

    <Form.Group as={Col} controlId="formEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Masukkan Alamat Email Anda"
      />
    </Form.Group>
    </Row>
    <Row className='mb-3'>
      <Form.Group as={Col} controlId="formSelectCar">
      <Form.Label>Models</Form.Label>
      <Form.Control
        as="select"
        name="carModel"
        value={formData.carModel}
        onChange={handleInputChange}
      >
        <option selected>Pilih Mobil</option>
        <option value="Ranger Raptor">Ranger Raptor</option>
          <option value="Ranger Wildtrak">Ranger Wildtrak</option>
          <option value="Ranger XLT">Ranger XLT</option>
          <option value="Ranger Base">Ranger Base</option>
          <option value="Everest Titanium">Everest Titanium</option>
          <option value="Everest XLT">Everest XLT</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formdateTestDrive">
      <Form.Label>Jadwal Test Drive</Form.Label>
      <Form.Control
        type="date"
        name="dateTestDrive"
        value={formData.dateTestDrive}
        onChange={handleInputChange}
      />
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" controlId="formSelectDealer">
      <Form.Label>Pilih Dealer Terdekat</Form.Label>
      <Form.Control
        as="select"
        name="dealer"
        value={formData.dealer}
        onChange={handleInputChange}
      >
        <option selected>Pilih Dealer</option>
        <option value="Mampang Jakarta">Mampang Jakarta</option>
        <option value="Balikpapan">Balikpapan</option>
        <option value="Medan">Medan</option>
      </Form.Control>
    </Form.Group>
    <Form.Group className="mb-3" controlId="fromAddress">
      <Form.Label>Pesan</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        name="inputMessage"
        value={formData.inputMessage}
        onChange={handleInputChange}
        placeholder="Masukkan Pesan"
      />
    </Form.Group>


    <Button variant="primary" type="submit">
      Submit
    </Button>
  </form>
  )
}
