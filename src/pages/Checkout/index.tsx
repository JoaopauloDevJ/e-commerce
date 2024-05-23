import * as S from './styles'
import Card from '../../components/Card'
import Button from '../../components/Button'
import { useState } from 'react'
import boleto from '../../assets/images/boleto.png'
import cartao from '../../assets/images/cartao.png'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  return (
    <div className="container">
      <Card title="Dados de cobrança">
        <>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="fullName">Nome completo</label>
              <input id="fullName" type="text" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="email">E-mail</label>
              <input id="email" type="text" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" type="text" />
            </S.InputGroup>
          </S.Row>
          <h3 className="margin-top">Dados de entrega - contéudo digital</h3>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input id="deliveryEmail" type="text" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="confirmeDeliveryEmail">Confirme o e-mail</label>
              <input id="confirmeDeliveryEmail" type="text" />
            </S.InputGroup>
          </S.Row>
        </>
      </Card>
      <Card title="Pagamentos">
        <>
          <S.TabButton
            isActive={!payWithCard}
            onClick={() => setPayWithCard(false)}
            type="button"
          >
            <img src={boleto} alt="Boleto bancário" />
            Boleto bancário
          </S.TabButton>
          <S.TabButton
            isActive={payWithCard}
            onClick={() => setPayWithCard(true)}
            type="button"
          >
            <img src={cartao} alt="Cartão de crédito" />
            Cartão de Crédito
          </S.TabButton>
          <div className="margin-top">
            {payWithCard ? (
              <>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="cardOwner">Nome do titular do cartão</label>
                    <input id="cardOwner" type="text" />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="cpfCardOwner">
                      CPF do titular do cartão
                    </label>
                    <input id="cpfCardOwner" type="text" />
                  </S.InputGroup>
                </S.Row>
                <S.Row marginTop="16px">
                  <S.InputGroup>
                    <label htmlFor="nameDisplayCard">Nome do cartão</label>
                    <input id="nameDisplayCard" type="text" />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input id="cardNumber" type="number" />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="124px">
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <input id="expiresMonth" type="number" />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="124px">
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <input id="expiresYear" type="number" />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="48px">
                    <label htmlFor="cardCode">CVV</label>
                    <input id="cardCode" type="number" />
                  </S.InputGroup>
                </S.Row>
                <S.Row marginTop="24px">
                  <S.InputGroup maxWidth="150px">
                    <label htmlFor="installments">Parcelamento</label>
                    <select>
                      <option>1x de R$ 200,00</option>
                      <option>2x de R$ 100,00</option>
                      <option>3x de R$ 66,67</option>
                    </select>
                  </S.InputGroup>
                </S.Row>
              </>
            ) : (
              <p>
                Ao optar por essa forma de pagamento, é importante lembrar que a
                confirmação pode levar até 3 dias úteis, devido aos prazos
                estabelecidos pelas instituições financeiras. Portanto, a
                liberação do código de ativação do jogo adquirido ocorrerá
                somente após a aprovação do pagamento do boleto.
              </p>
            )}
          </div>
        </>
      </Card>
      <Button type="button" title="Clique aqui para finalizar a compra!">
        Finalizar pagamento
      </Button>
    </div>
  )
}

export default Checkout
