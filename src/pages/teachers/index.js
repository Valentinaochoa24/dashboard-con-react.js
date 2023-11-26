// material-ui
import { Stack, Box, Button, Grid, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ant-design/icons
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import TeachersActions from './components/TeachersActions';

const createData = (document, name, lastName, address, age) => {
  return { document, name, lastName, address, age };
};

const rows = [
  createData(1234567890, 'Gabriel', 'Martínez López', 'Calle 123 # 45-67, Barrio El Centro, Medellín', 29),
  createData(2345678901, 'Isabella', 'Gómez Rodríguez', 'Carrera 9 # 87-65, Barrio La Candelaria, Bogotá', 34),
  createData(3456789012, 'Mateo', 'Hernández Silva', 'Avenida 34 # 56-78, Conjunto Residencial Los Laureles, Cali', 31),
  createData(4567890123, 'Valeria', 'Pérez Gutiérrez', 'Carrera 12 # 34-56, Barrio Los Olivos, Barranquilla', 26),
  createData(5678901234, 'Samuel', 'Sánchez Vargas', 'Calle 78 # 90-12, Conjunto Residencial Las Palmas, Cartagena', 37),
  createData(6789012345, 'Camila', 'Rodríguez Mendoza', 'Carrera 23 # 45-67, Barrio La Aurora, Bucaramanga', 32)
];

const Teachers = () => {
  return (
    <Stack spacing={3}>
      <Grid container direction="row-reverse">
        <Button size="small" variant="contained" component={Link} to="/teachers/create">
          <PlusOutlined style={{ marginRight: 5 }} /> Add Teacher
        </Button>
      </Grid>
      <MainCard title="teachers">
        <Stack spacing={0.75} sx={{ mt: -1.5 }}>
          <Box sx={{ height: 'auto', width: '100%' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Document</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Last name</TableCell>
                  <TableCell align="right">Address</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.document} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {row.document}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.lastName}</TableCell>
                    <TableCell align="right">{row.address}</TableCell>
                    <TableCell align="right">
                      <TeachersActions teacherId={row.document} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Stack>
      </MainCard>
    </Stack>
  );
};

export default Teachers;
