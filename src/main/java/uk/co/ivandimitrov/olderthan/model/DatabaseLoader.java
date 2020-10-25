package uk.co.ivandimitrov.olderthan.model;

import java.nio.file.Paths;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private InventionRepository inventionRepository;

    @Autowired
    public DatabaseLoader(InventionRepository inventionRepository) {
        this.inventionRepository = inventionRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        // For testing purposes
        // try {
        //     ObjectMapper mapper = new ObjectMapper();
        //     Invention[] inventions = mapper.readValue(Paths.get("inventions.json").toFile(), Invention[].class);
        //     for (Invention invention : inventions) {
        //         inventionRepository.save(invention);
        //     }
        // } catch (Exception ex) {
        //     ex.printStackTrace();
        // }
    }

}
