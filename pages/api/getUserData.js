import getUser from '../../utils/getUser';

const getUserData = async (req, res) => {
  const data = await getUser('lucasbazev');

  res.send(data);
}

export default getUserData;