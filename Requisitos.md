id, nome, scricao, valor diario, esta disponivel, multa atraso, marca, categoria

# Cadastro de carro

**RF**

- Deve ser possível cadastrar um novo carro
- Deve ser possível listar todas as categorias

**RN**

- Não deve ser possível cadastrar um carro com uma placa já existente
- Não deve ser possível alterar alterar a placade um carro
- O carro deve ser cadastrado com disponibilidade por padrão
- O usuário responsável pelo cadastro deve ser um usuário administrador

(Não deve ser possível cadastrar um carro, com uma categoria inexistente)

# Listagem de carros

**RF**

- Deve ser possível listar todos os carros disponíveis
- Deve ser possível listar todos os carros disponíveis pelo nome da categoria
- Deve ser possível listar todos os carros disponíveis pelo nome da marca
- Deve ser possível listar todos os carros disponíveis pelo nome do carro

**RN**

- O usuário não precisa estar logado o sistema

# Cadastro de Especificação no carro

**RF**

- Deve ser possível cadastrar uma especificação para um carro

**RN**

- Não deve ser possível cadastrar uma especificação para um carro não cadastrado
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro
- O usuário responsável pelo cadastro deve ser um usuário administrador

# Cadastro de imagebs do carro

**RF**

- Deve ser possivel cadastrar a imagem do carro

**RNF**

- Utilizar o multer para upload  dos arquivos

**RN**

- O usuario deve poder cadastrar mais de uma imagem para o mesmo carro
- O usuário responsável pelo cadastro deve ser um usuário administrador

# Aluguel de carro

**RF**

- Deve ser possivel cadastrar um aluguel

**RN**

- O aluguel deve ter duracao minima de 24 horas
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro
