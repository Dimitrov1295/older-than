package uk.co.ivandimitrov.olderthan.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InventionRepository extends JpaRepository<Invention, String> {

}
