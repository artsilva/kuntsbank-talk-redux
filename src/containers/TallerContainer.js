import { connect } from 'react-redux'
import Taller from '../components/Taller'
import * as tallerModule from '../modules/tallerModule'

const mapStateToProps = (state) => ({
  person: tallerModule.person(state),
})

const mapDispatchToProps = (dispatch) => ({
  getPersonList: (id) => tallerModule.personListThunk(dispatch, id),
  clearPerson: () => tallerModule.clearPerson(dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Taller)
