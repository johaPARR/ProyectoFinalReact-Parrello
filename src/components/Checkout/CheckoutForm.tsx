/**
 * 
 * CHECKOUTFORM COMPONENT
 * This component handles the user data collection through a controlled form.
 * Key Functionalities:
 * - Local State Management: Tracks input values for name, phone, email, and email confirmation.
 * - Validation Logic: Implements a security check to ensure both email fields match before submission.
 * - Parent Communication: Uses the 'onConfirm' prop to send the validated user data back to the Checkout orchestrator.
 * - UI/UX: Utilizes Chakra UI components for a responsive and accessible form design.
 *
 * 
 * COMPONENTE CHECKOUTFORM
 * Este componente gestiona la recolección de datos del usuario a través de un formulario controlado.
 * Funcionalidades Clave:
 * - Gestión de Estado Local: Realiza el seguimiento de los valores de entrada para nombre, teléfono, email y confirmación de email.
 * - Lógica de Validación: Implementa una verificación de seguridad para asegurar que ambos campos de email coincidan antes del envío.
 * - Comunicación con el Padre: Utiliza la prop 'onConfirm' para enviar los datos validados del usuario de vuelta al orquestador de Checkout.
 * - UI/UX: Utiliza componentes de Chakra UI para un diseño de formulario responsivo y accesible.
 */


import React, { useState } from 'react';
import { 
    Box, 
    Button, 
    VStack, 
    Container, 
    Heading, 
    Text, 
    Input 
} from '@chakra-ui/react';

interface CheckoutFormProps {
    onConfirm: (userData: { name: string; phone: string; email: string }) => void;
}

const CheckoutForm = ({ onConfirm }: CheckoutFormProps) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');

    const handleConfirm = (event: React.FormEvent) => {
        event.preventDefault();
        if (email !== emailConfirm) {
            alert('Los emails no coinciden');
            return;
        }
        onConfirm({ name, phone, email });
    };

    // Usamos una variable para el Input para forzar que acepte las props
    const CustomInput = Input as any;

    return (
        <Container maxW="container.sm" py={10}>
            <Heading size="lg" mb={6}>Datos de Facturación</Heading>
            <form onSubmit={handleConfirm}>
                <VStack gap="20px" align="stretch">
                    <Box>
                        <Text mb="8px" fontWeight="semibold">Nombre Completo</Text>
                        <CustomInput 
                            required
                            type="text" 
                            value={name} 
                            onChange={(e: any) => setName(e.target.value)} 
                            placeholder="Ej: Juan Pérez" 
                        />
                    </Box>

                    <Box>
                        <Text mb="8px" fontWeight="semibold">Teléfono</Text>
                        <CustomInput 
                            required
                            type="tel" 
                            value={phone} 
                            onChange={(e: any) => setPhone(e.target.value)} 
                            placeholder="Ej: 1122334455" 
                        />
                    </Box>

                    <Box>
                        <Text mb="8px" fontWeight="semibold">Email</Text>
                        <CustomInput 
                            required
                            type="email" 
                            value={email} 
                            onChange={(e: any) => setEmail(e.target.value)} 
                            placeholder="email@ejemplo.com" 
                        />
                    </Box>

                    <Box>
                        <Text mb="8px" fontWeight="semibold">Confirmar Email</Text>
                        <CustomInput 
                            required
                            type="email" 
                            value={emailConfirm} 
                            onChange={(e: any) => setEmailConfirm(e.target.value)} 
                        />
                    </Box>

                    <Button type="submit" colorScheme="teal" width="full" mt={4} size="lg">
                        Generar Orden
                    </Button>
                </VStack>
            </form>
        </Container>
    );
};

export default CheckoutForm;