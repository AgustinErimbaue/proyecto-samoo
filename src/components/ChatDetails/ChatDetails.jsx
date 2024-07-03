import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  VStack, 
  Modal, 
  ModalBody, 
  ModalCloseButton, 
  ModalContent, 
  ModalFooter, 
  ModalHeader, 
  ModalOverlay, 
  Input, 
  useDisclosure,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';
import { FloatButton } from 'antd';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const ChatDetails = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
    }
  };

  return (
    <>
    <Box>
      <FloatButton 
        icon={<img src='src/assets/Img/Vector.png' alt="Chat Icon" style={{ width: '100%', height: '100%' }} />}
        type="primary"
        style={{
          right: 24,
          width: 60,
          height: 60,
        }}
        onClick={onOpen}
      />
    </Box>
    <Modal isOpen={isOpen} onClose={onClose} size="sm" borderRadius='8px'>
      <ModalOverlay />
      <ModalContent position="fixed" top="20%" right="0" width="300px">
        <ModalHeader background='#0f8ba0' color='#fff' borderRadius={5}>Asistente</ModalHeader>
        <ModalCloseButton color='#fff'/>
        <ModalBody>
          <VStack align="start" spacing={4} h="300px" overflowY="auto" border="1px solid #0f8ba0" p={4} borderRadius="md">
            {messages.map((msg, index) => (
              <Box key={index} alignSelf={msg.sender === 'user' ? 'flex-end' : 'flex-start'} bg={msg.sender === 'user' ? 'blue.100' : 'gray.100'} p={2} borderRadius="md">
                {msg.text}
              </Box>
            ))}
          </VStack>
        </ModalBody>
        <ModalFooter>
          <InputGroup size="md">
            <Input 
              placeholder="Escribe tu mensaje..." 
              value={newMessage}
              color='#0f8ba0' 
              borderRadius="full"
              onChange={(e) => setNewMessage(e.target.value)} 
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <InputRightElement width="4.5rem">
              <Button 
                h="1.75rem" 
                size="sm" 
                colorScheme="teal" 
                variant='ghost' 
                onClick={handleSendMessage}
              >
                <ArrowForwardIcon />
              </Button>
            </InputRightElement>
          </InputGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  );
}

export default ChatDetails;