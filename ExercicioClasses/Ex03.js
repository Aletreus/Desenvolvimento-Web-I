'''
arquivo = open('Saldo.txt', 'a') <-- Abra o Arquivo para o código funcionar
arquivo.close()
'''
res = ''
while res != '3':
    print('=-=-=-=-=Banco Do Cedup=-=-=-=-=')
    print('[1] Cadastrar uma conta.')
    print('[2] Acessar uma conta existente.')
    print('[3] Encerrar o programa.')
    res = input(':')

    if res == '1':
        arquivo = open('Saldo.txt', 'r+')
        titular = input(f'Nome do Titular da conta: ')
        print('Para abrir uma conta precisamos de um valor inicial de deposito de R$50.')
        deposito = float(input('Insira o valor a ser depositado: '))
        while deposito < 50:
            print('Para abrir uma conta precisamos de um valor inicial de deposito de R$50.')
            deposito = float(input('Insira o valor a ser depositado: '))
        linhas = arquivo.readlines()
        if len(linhas) == 0:
            numero_conta = 1
        else:
            ultima_linha = linhas[-1]
            lista = ultima_linha.split(',')
            numero_conta = int(lista[0]) + 1
        arquivo.write(f'{numero_conta},{titular},{deposito}\n')
        arquivo.close()
        print(f'Conta criada com sucesso! Número da conta: {numero_conta}')

    elif res == '2':
        conta = int(input('Insira o número da conta existente: '))
        arquivo_ler = open('Saldo.txt', 'r')

        linhas = arquivo_ler.readlines()
        encontrado = False
        for i, linha in enumerate(linhas):
            lista = linha.split(',')
            numero_conta = int(lista[0])

            if numero_conta == conta:
                titular = lista[1]
                saldo = float(lista[2])
                encontrado = True
                print(f'Seja bem-vindo {titular}')
                print(f'O saldo atual da sua conta é de R${saldo:.2f}')
                break

        if not encontrado:
            print("Conta não encontrada.")
        else:
            print('[1] Sacar\n'
                  '[2] Depositar\n'
                  '[3] Trocar de conta\n'
                  '[4] Voltar ao menu principal')
            digito = input(':')
            if digito == '1':
                valor_saque = float(input('Digite o valor para saque: '))
                while valor_saque > saldo:
                    print('O valor de saque não pode ser maior que seu saldo.')
                    valor_saque = float(input('Digite o valor para saque: '))
                saldo -= valor_saque
                print(f'Saque realizado com sucesso! Novo saldo: R${saldo:.2f}')
                # Atualiza o saldo no arquivo
                linhas[i] = f'{numero_conta},{titular},{saldo}\n'
                with open('Saldo.txt', 'w') as arquivo:
                    arquivo.writelines(linhas)

            elif digito == '2':
                valor_deposito = float(input('Digite o valor para depósito: '))
                saldo += valor_deposito
                print(f'Depósito realizado com sucesso! Novo saldo: R${saldo:.2f}')
                linhas[i] = f'{numero_conta},{titular},{saldo}\n'
                with open('Saldo.txt', 'w') as arquivo:
                    arquivo.writelines(linhas)

            elif digito == '3':
                print('Trocando de conta...')
                continue

            elif digito == '4':
                continue

        arquivo_ler.close()

    elif res == '3':
        print('Encerrando o programa...')
    else:
        print('Opção inválida, tente novamente.')
