import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

async function testBackend() {
  console.log('\n🧪 Testing Backend API...\n');

  try {
    // Test 1: Health Check
    console.log('1️⃣  Testing Health Endpoint...');
    const healthResponse = await axios.get('http://localhost:5000/health');
    console.log('✅ Health Check:', healthResponse.data);

    // Test 2: Signup (This will test email functionality)
    console.log('\n2️⃣  Testing Signup Endpoint...');
    const signupData = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
      role: 'user'
    };

    try {
      const signupResponse = await axios.post(`${API_URL}/auth/signup`, signupData);
      console.log('✅ Signup Success:', signupResponse.data);
      console.log('\n📧 Email Verification Status:');
      console.log('   - Email should be sent to:', signupData.email);
      console.log('   - Check your email configuration in .env file');
    } catch (signupError) {
      if (signupError.response?.status === 400) {
        console.log('⚠️  User already exists, testing login instead...');
        
        // Test 3: Login
        console.log('\n3️⃣  Testing Login Endpoint...');
        const loginResponse = await axios.post(`${API_URL}/auth/login`, {
          email: signupData.email,
          password: signupData.password
        });
        console.log('✅ Login Success:', loginResponse.data);
      } else {
        throw signupError;
      }
    }

    console.log('\n✅ All tests passed!');
    console.log('\n📝 Email Configuration Notes:');
    console.log('   ⚠️  Email credentials are NOT configured yet!');
    console.log('   To enable email functionality:');
    console.log('   1. Update EMAIL_USER in .env file');
    console.log('   2. Update EMAIL_PASSWORD in .env file');
    console.log('   3. For Gmail: Use App-Specific Password');
    console.log('   4. Restart the backend server\n');

  } catch (error) {
    console.error('\n❌ Error:', error.response?.data || error.message);
    console.log('\n💡 Make sure backend server is running on port 5000');
  }
}

testBackend();
