import * as S from './styles'
import Card from '../../components/Card'
import Button from '../../components/Button'

const Checkout = () => {
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
        <div>
          <p>
            Ao optar por essa forma de pagamento, é importante lembrar que a
            confirmação pode levar até 3 dias úteis, devido aos prazos
            estabelecidos pelas instituições financeiras. Portanto, a liberação
            do código de ativação do jogo adquirido ocorrerá somente após a
            aprovação do pagamento do boleto.
          </p>
        </div>
      </Card>
      <Button type="button" title="Clique aqui para finalizar a compra!">
        Finalizar pagamento
      </Button>
    </div>
  )
}

export default Checkout
