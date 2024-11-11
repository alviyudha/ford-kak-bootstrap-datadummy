import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';

export default function FormServiceComp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telp: '',
    nopol: '',
    carModel: 'Jenis Kendaraan',
    dealer: 'Pilih Dealer',
    Date: '',
    inputMessage: '',
  });

  const dealerWhatsAppNumbers = {
    'Pilih Dealer': '',
    'Mampang Jakarta': '+6281230002453',
    'Balik Papan': '+6281230002453', 
    'Bintaro': '+6281230002453', 
    'Tangerang City': '+6281230002453', 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, telp, nopol, carModel, dealer, DateService, inputMessage } = formData;

    if (carModel === 'Jenis Kendaraan' || dealer === 'Pilih Dealer') {
      alert('Silakan pilih Jenis Kendaraan dan Dealer terlebih dahulu.');
      return;
    }

    const data = {
      Name: name,
      Email: email,
      Telp: telp,
      NOPOL: nopol,
      Model: carModel,
      Dealer: dealer,
      Date: DateService,
      Message: inputMessage,
    };

    try {
      const response = await fetch('https://api.apispreadsheets.com/data/kcLLdJlGyCsFIdjd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
      });

      if (response.status === 201) {
        alert('Data berhasil disimpan');

        // Kirim pesan WhatsApp setelah data disimpan di Spreadsheet
        const whatsappNumber = dealerWhatsAppNumbers[dealer];
        if (whatsappNumber) {
          const messageWa = `Halo, Saya ingin melakukan booking service.\nNama: ${name}.\nEmail: ${email}\nTelp: ${telp}\nMobil yang digunakan: ${carModel}\nNOPOL: ${nopol}.\nDealer yang diinginkan: ${dealer}.\n Jadwal Services: ${DateService}\nPesan: ${inputMessage}`;

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
    <form onSubmit={handleSubmit} target="_blank">
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
      <Form.Group as={Col} controlId="formNopol">
        <Form.Label>No Pol Kendaraan</Form.Label>
        <Form.Control
          type="text"
          name="nopol"
          value={formData.nopol}
          onChange={handleInputChange}
          placeholder="Ex B 123 CDS"
        />
      </Form.Group>
      <Form.Group as={Col} controlId="formSelectCar">
        <Form.Label>Jenis Kendaraan</Form.Label>
        <Form.Control
          as="select"
          name="carModel"
          value={formData.carModel}
          onChange={handleInputChange}
        >
          <option value="Jenis Kendaraan">Jenis Kendaraan</option>
          <option value="Ranger Raptor">Ranger Raptor</option>
          <option value="Ranger Wildtrak">Ranger Wildtrak</option>
          <option value="Ranger XLT">Ranger XLT</option>
          <option value="Ranger Base">Ranger Base</option>
          <option value="Everest Titanium">Everest Titanium</option>
          <option value="Everest XLT">Everest XLT</option>
          <option value="Fiesta">Fiesta</option>
          <option value="Focus">Focus</option>
          <option value="Eco Sport">Eco Sport</option>
          <option value="Escape">Escape</option>
          <option value="Other">Other</option>
        </Form.Control>
      </Form.Group>
      <Form.Group as={Col} controlId="formDateService">
        <Form.Label>Jadwal Service</Form.Label>
        <Form.Control
          type="date"
          name="DateService"
          value={formData.DateService}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group as={Col} controlId="formSelectDealer">
        <Form.Label>Pilih Dealer</Form.Label>
        <Form.Control
          as="select"
          name="dealer"
          value={formData.dealer}
          onChange={handleInputChange}
        >
          <option value="Pilih Dealer">Pilih Dealer</option>
          <option value="Mampang Jakarta">Mampang Jakarta</option>
          <option value="Bintaro">Bintaro</option>
          <option value="Tangerang City">Tangerang City</option>
        </Form.Control>
      </Form.Group>
      <Form.Group as={Col} controlId="formAddress">
        <Form.Label>Alamat</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="inputMessage"
          value={formData.inputMessage}
          onChange={handleInputChange}
          placeholder="Masukkan Alamat Anda"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
  );
}
