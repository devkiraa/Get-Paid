# Kerala Transport Bus UPI Payment System

## Overview

This project aims to integrate UPI payment capabilities into Kerala transport buses using a handheld Android POS Billing Machine. The system will display a UPI QR code for secure payments via Razorpay. The web app will be mobile-optimized, designed to look like a mobile app, and later converted into one. It also includes an option for cash payments. A future enhancement includes a wallet app for direct payments.

## Features

- **UPI Payment Integration**: Display UPI QR codes for passengers to scan and pay securely through Razorpay.
- **Cash Payment Option**: Support for traditional cash payments.
- **Mobile-Optimized Web App**: Designed to look and function like a native mobile app.
- **Planned Wallet App**: Future development includes a wallet app for scanning QR codes and making direct payments.

## Tech Stack

- **Backend**: Node.js
- **Database**: MySQL
- **Payment Gateway**: Razorpay
- **UI Framework**: Tailwind CSS
- **Color Theme**: Blue

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Public-Transport-Ticketing-System.git
   cd Public-Transport-Ticketing-System
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file and add your Razorpay credentials and database connection details.

4. **Run the development server**
   ```bash
   npm start
   ```

## Usage

- Access the web app via a mobile browser to simulate the mobile app experience.
- Scan the UPI QR code with any UPI-compatible app to make payments.

## Future Enhancements

- **Wallet App**: A dedicated mobile app that can scan QR codes and facilitate direct payments from a digital wallet.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or feature additions.

## License

This project is licensed under the MIT License.

## Contact

For inquiries, please contact [devkiraa@gmail.com](mailto:devkiraa@gmail.com).
